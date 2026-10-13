import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

app.get('/pricing-plans', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pricing_plans ORDER BY id');

        res.json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Ошибка при получении тарифов',
        });
    }
});

app.get('/testimonials', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM testimonials WHERE is_active = TRUE ORDER BY id',
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при получении отзывов' });
    }
});

app.post('/quotes', async (req, res) => {
    try {
        const { name, email, company, companySize, problem } = req.body;

        const result = await pool.query(
            `INSERT INTO quotes (name, email, company, company_size, problem)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING id`,
            [name, email, company, companySize, problem],
        );

        res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при сохранении заявки' });
    }
});

app.post('/contacts', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const result = await pool.query(
            `INSERT INTO contacts (name, email, subject, message)
             VALUES ($1, $2, $3, $4)
             RETURNING id`,
            [name, email, subject, message],
        );

        res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при сохранении' });
    }
});

app.get('/blog-posts', async (req, res) => {
    try {
        const limit = Number(req.query.limit) || 6;
        const offset = Number(req.query.offset) || 0;

        const result = await pool.query(
            `SELECT * FROM blog_posts
             WHERE is_active = TRUE
             ORDER BY published_at DESC
             LIMIT $1 OFFSET $2`,
            [limit, offset],
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при получении статей' });
    }
});

app.get('/blog-posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            'SELECT * FROM blog_posts WHERE id = $1 AND is_active = TRUE',
            [id],
        );

        if (!result.rows.length) {
            return res.status(404).json({ message: 'Not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка' });
    }
});

app.get('/blog-posts/:id/related', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT * FROM blog_posts
             WHERE id <> $1 AND is_active = TRUE
             ORDER BY published_at DESC
             LIMIT 3`,
            [id],
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка' });
    }
});

app.get('/blog-posts/:id/responses', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT * FROM blog_responses
             WHERE post_id = $1 AND is_approved = TRUE
             ORDER BY created_at`,
            [id],
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка' });
    }
});

app.post('/blog-posts/:id/responses', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, comment } = req.body;

        const result = await pool.query(
            `INSERT INTO blog_responses
             (post_id, author_name, author_avatar, author_role, email, text)
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING id`,
            [id, name, 'Avatar4', 'User', email, comment],
        );

        res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка' });
    }
});

app.get('/projects', async (req, res) => {
    try {
        const exclude = req.query.exclude;
        const category = req.query.category as string | undefined;

        const conditions: string[] = [];
        const params: (string | number)[] = [];

        if (category && category !== 'all') {
            params.push(category);
            conditions.push(`category = $${params.length}`);
        }

        if (exclude) {
            params.push(Number(exclude));
            conditions.push(`id <> $${params.length}`);
        }

        const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
        const query = `SELECT * FROM projects ${where} ORDER BY id`;

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка' });
    }
});

app.get('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);

        if (!result.rows.length) {
            return res.status(404).json({ message: 'Not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка' });
    }
});

app.get('/team', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM team ORDER BY sort_order, id');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

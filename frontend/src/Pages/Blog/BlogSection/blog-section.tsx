import { useEffect, useState } from 'react';
import styles from './blog-section.module.scss';
import BlogCard from './blog-card';
import { fetchBlogPosts } from './blog-api';
import type { BlogPost } from './types';

const LIMIT = 6;

export default function BlogSection() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setLoading(true);
            try {
                const data = await fetchBlogPosts(LIMIT, 0, controller.signal);
                setPosts(data);
                if (data.length < LIMIT) setHasMore(false);
            } catch (e) {
                if ((e as Error).name !== 'AbortError') {
                    setError('Не удалось загрузить статьи');
                    console.error(e);
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, []);

    const loadMore = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchBlogPosts(LIMIT, posts.length);
            setPosts((prev) => [...prev, ...data]);
            if (data.length < LIMIT) setHasMore(false);
        } catch (e) {
            setError('Не удалось загрузить статьи');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.section}>
            {error && <p className={styles.state}>{error}</p>}

            <div className={styles.grid}>
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            {hasMore && (
                <button className={styles.loadMore} onClick={loadMore} disabled={loading}>
                    {loading ? 'Loading…' : 'Load More'}
                </button>
            )}
        </section>
    );
}

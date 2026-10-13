import { useState, type FormEvent, type ChangeEvent } from 'react';
import styles from './post-comment-form.module.scss';
import { postResponse } from '../blog-post-api';

interface Props {
    postId: number;
}

const initial = { name: '', email: '', comment: '' };

export default function PostCommentForm({ postId }: Props) {
    const [form, setForm] = useState(initial);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await postResponse(postId, form);
            setForm(initial);
            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <label className={styles.field}>
                    <span className={styles.fieldLabel}>Name</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.fieldLabel}>Email</span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </label>
            </div>

            <label className={styles.field}>
                <span className={styles.fieldLabel}>Comment</span>
                <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                />
            </label>

            <button type="submit" className={styles.btn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Post Comment'}
            </button>

            {status === 'success' && (
                <p className={styles.success}>Thanks! Your comment is awaiting moderation.</p>
            )}
            {status === 'error' && (
                <p className={styles.error}>Something went wrong. Please try again.</p>
            )}
        </form>
    );
}

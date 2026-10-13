import { useEffect, useState } from 'react';
import styles from './post-responses.module.scss';
import ResponseItem from './response-item';
import { fetchResponses } from '../blog-post-api';
import type { BlogResponse } from '../types';

interface Props {
    postId: number;
}

export default function PostResponses({ postId }: Props) {
    const [items, setItems] = useState<BlogResponse[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        fetchResponses(postId, controller.signal)
            .then(setItems)
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            });
        return () => controller.abort();
    }, [postId]);

    if (!items.length) return null;

    return (
        <section className={styles.responses}>
            <h2 className={styles.title}>Responses</h2>
            <ul className={styles.list}>
                {items.map((r) => (
                    <ResponseItem key={r.id} response={r} />
                ))}
            </ul>
        </section>
    );
}

import { useEffect, useState } from 'react';
import styles from './post-related.module.scss';
import RelatedCard from './related-card';
import { fetchRelated } from '../blog-post-api';
import type { BlogPost } from '../types';

interface Props {
    postId: number;
}

export default function PostRelated({ postId }: Props) {
    const [items, setItems] = useState<BlogPost[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        fetchRelated(postId, controller.signal)
            .then(setItems)
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            });
        return () => controller.abort();
    }, [postId]);

    if (!items.length) return null;

    return (
        <section className={styles.related}>
            <h2 className={styles.title}>Other people also read …</h2>

            <div className={styles.grid}>
                {items.slice(0, 3).map((p) => (
                    <RelatedCard key={p.id} post={p} />
                ))}
            </div>
        </section>
    );
}

import { useEffect, useState } from 'react';
import styles from './other-projects.module.scss';
import OtherCard from './other-card';
import { fetchOtherProjects } from '../project-detail-api';
import type { Project } from '../types';

interface Props {
    excludeId: number;
}

export default function OtherProjects({ excludeId }: Props) {
    const [items, setItems] = useState<Project[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        fetchOtherProjects(excludeId, controller.signal)
            .then(setItems)
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            });
        return () => controller.abort();
    }, [excludeId]);

    if (!items.length) return null;

    return (
        <section className={styles.other}>
            <header className={styles.head}>
                <span className={styles.label}>Projects</span>
                <h2 className={styles.title}>Other Amazing Projects</h2>
            </header>

            <div className={styles.grid}>
                {items.slice(0, 2).map((p) => (
                    <OtherCard key={p.id} project={p} />
                ))}
            </div>
        </section>
    );
}

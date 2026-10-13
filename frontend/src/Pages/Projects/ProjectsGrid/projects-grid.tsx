import { useEffect, useState } from 'react';
import styles from './projects-grid.module.scss';
import ProjectCard from './project-card';
import { fetchProjects } from '../projects-api';
import type { Project } from '../types';

interface Props {
    category: string;
}

export default function ProjectsGrid({ category }: Props) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setLoading(true);
            try {
                const data = await fetchProjects(category, controller.signal);

                const [first, second] = data;
                const arranged = [first, second, second, first].filter(Boolean);

                setProjects(arranged.map((p, i) => ({ ...p, id: Number(`${p.id}${i}`) })));
            } catch (e) {
                if ((e as Error).name !== 'AbortError') console.error(e);
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [category]);

    if (loading) return <p className={styles.state}>Загрузка…</p>;

    if (!projects.length) {
        return <p className={styles.state}>Проекты не найдены</p>;
    }

    return (
        <section className={styles.grid}>
            <div className={styles.cards}>
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </section>
    );
}

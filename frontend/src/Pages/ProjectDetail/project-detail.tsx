import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './project-detail.module.scss';
import DetailHero from './DetailHero/detail-hero';
import OtherProjects from './OtherProjects/other-projects';
import { fetchProject } from './project-detail-api';
import type { Project } from './types';

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const controller = new AbortController();

        setLoading(true);
        setProject(null);

        fetchProject(id, controller.signal)
            .then(setProject)
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [id]);

    if (loading) return <div className={styles.state}>Загрузка…</div>;

    if (!project) {
        return (
            <div className={styles.state}>
                <p>Проект не найден</p>
                <Link to="/projects">← Вернуться к проектам</Link>
            </div>
        );
    }

    return (
        <article className={styles.detail}>
            <DetailHero project={project} />
            <OtherProjects excludeId={project.id} />
        </article>
    );
}

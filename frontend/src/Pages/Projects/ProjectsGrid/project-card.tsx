import styles from './project-card.module.scss';
import Button from '../../../Components/Button/button';

interface Project {
    id: number;
    text: string;
    description: string;
    device_type: 'mobile' | 'tablet' | 'desktop';
}

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const isMobile = project.device_type === 'mobile';
    const isDesktop = project.device_type === 'desktop';

    return (
        <article className={styles.cardInner}>
            <div className={styles.card}>
                <div className={styles.skeletons}>
                    <div className={styles.skeletonLong} />
                    <div className={styles.skeletonShort} />
                </div>

                {isMobile && <div className={styles.mobileSkeleton} />}
                {isDesktop && <div className={styles.tableSkeleton} />}
            </div>

            <div className={styles.detail}>
                <div className={styles.detailText}>
                    <p className={styles.heading}>{project.text}</p>
                    <p className={styles.text}>{project.description}</p>
                </div>

                <Button variant="border" text="Detail" to={`/projects/${project.id}`} />
            </div>
        </article>
    );
}

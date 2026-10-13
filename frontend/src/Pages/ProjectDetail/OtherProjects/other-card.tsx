import styles from './other-card.module.scss';
import Button from '../../../Components/Button/button';
import type { Project } from '../types';

interface Props {
    project: Project;
}

export default function OtherCard({ project }: Props) {
    return (
        <article className={styles.cardInner}>
            <div className={styles.card}>
                <div className={styles.skeletons}>
                    <div className={styles.skeletonLong} />
                    <div className={styles.skeletonShort} />
                </div>

                {project.device_type === 'mobile' && <div className={styles.mobileSkeleton} />}
                {project.device_type === 'desktop' && <div className={styles.tableSkeleton} />}
                {project.device_type === 'tablet' && <div className={styles.tabletSkeleton} />}
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

import styles from './detail-hero.module.scss';

interface Project {
    id: number;
    text: string;
    description: string;
    device_type: 'mobile' | 'tablet' | 'desktop';
    category: string;
    client: string | null;
    technology: string | null;
}

interface Props {
    project: Project;
}

export default function DetailHero({ project }: Props) {
    return (
        <section className={styles.hero}>
            <header className={styles.head}>
                <span className={styles.label}>Project Detail</span>
                <h1 className={styles.title}>{project.text}</h1>
            </header>

            <div className={styles.divider} />

            <div className={styles.body}>
                <div className={styles.preview}>
                    <div className={styles.previewInner}>
                        <div className={styles.skeletons}>
                            <div className={styles.skeletonLong} />
                            <div className={styles.skeletonShort} />
                        </div>

                        {project.device_type === 'mobile' && (
                            <div className={styles.mobileSkeleton} />
                        )}
                        {project.device_type === 'desktop' && (
                            <div className={styles.tableSkeleton} />
                        )}
                        {project.device_type === 'tablet' && (
                            <div className={styles.tabletSkeleton} />
                        )}
                    </div>
                </div>

                <div className={styles.info}>
                    <p className={styles.description}>{project.description}</p>

                    <dl className={styles.meta}>
                        <div className={styles.metaItem}>
                            <dt>Category</dt>
                            <dd>{project.category}</dd>
                        </div>

                        <div className={styles.metaItem}>
                            <dt>Client</dt>
                            <dd>{project.client ?? '—'}</dd>
                        </div>

                        <div className={styles.metaItem}>
                            <dt>Technology</dt>
                            <dd>{project.technology ?? '—'}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}

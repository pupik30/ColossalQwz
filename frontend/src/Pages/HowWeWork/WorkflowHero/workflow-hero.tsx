import styles from './workflow-hero.module.scss';

export default function WorkflowHero() {
    return (
        <section className={styles.hero}>
            <span className={styles.label}>How we work</span>
            <h1 className={styles.title}>
                We have a workflow that
                <br />
                allows the job to be
                <br />
                delivered well
            </h1>

            <div className={styles.divider} />
        </section>
    );
}

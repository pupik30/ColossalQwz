import styles from './services-hero.module.scss';

export default function ServicesHero() {
    return (
        <div className={styles.servicesHero}>
            <span className={styles.eyebrow}>SERVICES</span>

            <h1 className={styles.title}>We are here to help solve your company's problems</h1>
        </div>
    );
}

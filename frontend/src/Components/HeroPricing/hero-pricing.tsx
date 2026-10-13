import styles from './hero.module.scss';

interface HeroProps {
    label: string;
    title: string;
}

export default function Hero({ label, title }: HeroProps) {
    return (
        <section className={styles.wrapper}>
            <span className={styles.label}>{label}</span>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.divider} />
        </section>
    );
}

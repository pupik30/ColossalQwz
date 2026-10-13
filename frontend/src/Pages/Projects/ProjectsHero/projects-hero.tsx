import styles from './projects-hero.module.scss';

interface Props {
    category: string;
    onChange: (value: string) => void;
}

export default function ProjectsHero({ category, onChange }: Props) {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.head}>
                    <span className={styles.label}>Projects</span>
                    <h1 className={styles.title}>
                        We have completed many
                        <br />
                        amazing projects that you
                        <br />
                        will not believe
                    </h1>
                </div>

                <div className={styles.filter}>
                    <select
                        className={styles.select}
                        value={category}
                        onChange={(e) => onChange(e.target.value)}>
                        <option value="all">Technology</option>
                        <option value="mobile">Mobile</option>
                        <option value="desktop">Desktop</option>
                        <option value="tablet">Tablet</option>
                        <option value="web">Web</option>
                    </select>
                </div>
            </div>

            <div className={styles.divider} />
        </section>
    );
}

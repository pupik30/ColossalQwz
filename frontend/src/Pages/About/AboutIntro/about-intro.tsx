import styles from './about-intro.module.scss';
import { Photos } from '../../../../Photos';

export default function AboutIntro() {
    return (
        <section className={styles.intro}>
            <div className={styles.images}>
                <img src={Photos.About.About1} alt="" className={styles.imageTop} />
                <img src={Photos.About.About2} alt="" className={styles.imageBottom} />
            </div>

            <div className={styles.content}>
                <span className={styles.label}>About</span>
                <h1 className={styles.title}>
                    We are creative, smart and
                    <br />
                    hardworking people
                </h1>
                <p className={styles.text}>
                    Several creative people gather in the same place - that's QwzCollos. We
                    collaborate to produce the best results, loved by clients and comfortable for
                    users. Here we maintain togetherness even though with different backgrounds, all
                    the people here are already experts in their respective fields.
                </p>
            </div>
        </section>
    );
}

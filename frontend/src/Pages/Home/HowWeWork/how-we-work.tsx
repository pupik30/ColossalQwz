import styles from './how-we-work.module.scss';
import { Photos } from '../../../../Photos';

export default function HowWeWork() {
    return (
        <>
            <section className={styles.howWeWork}>
                <img src={Photos.HowWeWork} alt="" loading="lazy" />

                <div className={styles.infoWork}>
                    <span className={styles.eyebrown}>HOW WE WORK?</span>

                    <h2 className={styles.title}>
                        Everything is well planned, well designed and developed wholeheartedly
                    </h2>

                    <p className={styles.description}>
                        Careful planning makes us confident, developed with best practices so that
                        the project can be maintained. We always test projects before they are
                        shipped.
                    </p>
                </div>
            </section>
        </>
    );
}

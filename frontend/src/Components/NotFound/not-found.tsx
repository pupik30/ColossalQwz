import { Link } from 'react-router-dom';
import styles from './not-found.module.scss';

export default function NotFound() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <span className={styles.label}>Error</span>

                <h1 className={styles.title}>
                    The page you are looking
                    <br />
                    for is not on this website,
                    <br />
                    please check again
                </h1>

                <p className={styles.text}>
                    The system cannot find the page you are looking for, maybe you have the wrong
                    path or the page has been deleted.
                </p>

                <Link to="/" className={styles.btn}>
                    Back to Home
                </Link>
            </div>
        </section>
    );
}

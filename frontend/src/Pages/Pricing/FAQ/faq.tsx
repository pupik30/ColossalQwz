import styles from './faq.module.scss';
import { faqItems } from './faq-data';
import { Link } from 'react-router-dom';

export default function Faq() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.label}>FAQ</span>
                <h2 className={styles.title}>
                    Frequently asked questions,
                    <br />
                    maybe the same as yours
                </h2>
            </div>

            <div className={styles.grid}>
                {faqItems.map((item) => (
                    <article key={item.id} className={styles.item}>
                        <h3 className={styles.question}>{item.question}</h3>
                        <p className={styles.answer}>{item.answer}</p>
                    </article>
                ))}
            </div>

            <p className={styles.footer}>
                Didn't find an answer?{' '}
                <Link to="/contact" className={styles.link}>
                    Do not hesitate to ask!
                </Link>
            </p>
        </section>
    );
}

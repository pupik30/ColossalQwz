import { useParams, Link } from 'react-router-dom';
import styles from './service-detail.module.scss';
import { Photos } from '../../../Photos';
import { serviceDetails } from './service-detail-data';

export default function ServiceDetail() {
    const { id } = useParams();
    const data = serviceDetails[Number(id)];

    if (!data) {
        return (
            <div className={styles.state}>
                <p>Услуга не найдена</p>
                <Link to="/services">← Вернуться к услугам</Link>
            </div>
        );
    }

    const preview = Photos.Services[data.preview];

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <span className={styles.label}>{data.label}</span>
                <h1 className={styles.title}>{data.heroTitle}</h1>
                <div className={styles.divider} />
            </section>

            <section className={styles.intro}>
                <div className={styles.preview}>
                    <img src={preview} alt="" />
                </div>

                <div className={styles.content}>
                    <p>{data.intro}</p>
                    <p>{data.introExtra}</p>

                    <ul className={styles.bullets}>
                        {data.bullets.map((b) => (
                            <li key={b}>{b}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={styles.features}>
                <span className={styles.label}>Features</span>
                <h2 className={styles.featuresTitle}>
                    Here's what you will get when
                    <br />
                    purchasing this service
                </h2>

                <div className={styles.featuresGrid}>
                    {data.features.map((f) => (
                        <article key={f.title} className={styles.featureCard}>
                            <span className={styles.featureIcon}>
                                <img src={Photos.Icon[f.icon]} alt="" />
                            </span>
                            <h3 className={styles.featureTitle}>{f.title}</h3>
                            <p className={styles.featureText}>{f.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.faq}>
                <span className={styles.label}>FAQ</span>
                <h2 className={styles.faqTitle}>
                    Frequently asked questions,
                    <br />
                    maybe the same as yours
                </h2>

                <div className={styles.faqGrid}>
                    {data.faq.map((item, i) => (
                        <article key={i} className={styles.faqItem}>
                            <h3 className={styles.question}>{item.question}</h3>
                            <p className={styles.answer}>{item.answer}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

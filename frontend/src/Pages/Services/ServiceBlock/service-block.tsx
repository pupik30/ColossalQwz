import { Link } from 'react-router-dom';
import styles from './service-block.module.scss';
import { Photos } from '../../../../Photos';
import type { Service } from '../services-data';

interface Props {
    service: Service;
}

export default function ServiceBlock({ service }: Props) {
    const image = Photos.Services[service.image] ?? Photos.Services.uiDesign;

    return (
        <section className={`${styles.block} ${service.reversed ? styles.reversed : ''}`}>
            <div className={styles.media}>
                <img src={image} alt="" className={styles.image} />
            </div>

            <div className={styles.content}>
                <span className={styles.label}>{service.label}</span>
                <h2 className={styles.title}>{service.title}</h2>
                <p className={styles.text}>{service.text}</p>

                <ul className={styles.features}>
                    {service.features.map((f) => (
                        <li key={f.title} className={styles.feature}>
                            <span className={styles.featureIcon}>
                                <img src={Photos.Icon[f.icon]} alt="" />
                            </span>

                            <div className={styles.featureBody}>
                                <h3 className={styles.featureTitle}>{f.title}</h3>
                                {f.text && <p className={styles.featureText}>{f.text}</p>}
                            </div>
                        </li>
                    ))}
                </ul>

                <Link to={`/services/${service.id}`} className={styles.detailLink}>
                    Service Detail
                    <span className={styles.arrow}>→</span>
                </Link>
            </div>
        </section>
    );
}

import styles from './services.module.scss';
import ServicesHero from './ServicesHero/services-hero';
import ServiceBlock from './ServiceBlock/service-block';
import { services } from './services-data';

export default function Services() {
    return (
        <div className={styles.page}>
            <ServicesHero />

            <div className={styles.blocks}>
                {services.map((service) => (
                    <ServiceBlock key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

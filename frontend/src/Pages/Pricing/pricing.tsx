import styles from './pricing.module.scss';
import Hero from '../../Components/HeroPricing/hero-pricing';
import Pricings from './Pricings/pricings';
import Faq from './FAQ/faq';

export default function Pricing() {
    return (
        <>
            <main className={styles.main}>
                <Hero
                    label="Pricing"
                    title={'What do you need? Choose\na service that can help you'}
                />

                <Pricings />
                <Faq />
            </main>
        </>
    );
}

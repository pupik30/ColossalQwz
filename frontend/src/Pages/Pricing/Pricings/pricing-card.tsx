import styles from './pricing-card.module.scss';
import type { PricingPlan } from '../types';
import Button from '../../../Components/Button/button';

interface Props {
    plan: PricingPlan;
}

export default function PricingCard({ plan }: Props) {
    const features = [plan.feature_1, plan.feature_2, plan.feature_3, plan.feature_4].filter(
        Boolean,
    ) as string[];

    return (
        <article className={styles.card}>
            <header className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{plan.plan_name}</h3>
                <div className={styles.priceBlock}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <span className={styles.price}>${plan.price}</span>
                </div>
            </header>

            <ul className={styles.features}>
                {features.map((f) => (
                    <li key={f}>{f}</li>
                ))}

                {plan.extra_price != null && (
                    <li className={styles.extra}>
                        ${plan.extra_price}/{plan.extra_label}
                    </li>
                )}
            </ul>

            <Button text="Detail" variant="white" />
        </article>
    );
}

import styles from './get-started.module.scss';
import type { PricingPlan } from './types';
import Button from '../../../Components/Button/button';

type Props = {
    plans: PricingPlan[] | null;
};

export default function GetStarted({ plans }: Props) {
    return (
        <section className={styles.getStarted}>
            <span className={styles.eyebrow}>GET STARTED</span>
            <h2 className={styles.title}>What do you need? Choose a service that can help you</h2>

            {!plans && <p className={styles.state}>Загрузка…</p>}

            <div className={styles.grid}>
                {plans?.map((plan) => (
                    <article
                        key={plan.id}
                        className={styles.card}
                        style={{ background: plan.color_hex }}>
                        <header className={styles.cardHead}>
                            <h3 className={styles.cardTitle}>{plan.plan_name}</h3>
                            <div className={styles.priceBlock}>
                                <span className={styles.priceLabel}>Starting from</span>
                                <span className={styles.price}>${plan.price}</span>
                            </div>
                        </header>

                        <ul className={styles.features}>
                            {[plan.feature_1, plan.feature_2, plan.feature_3, plan.feature_4]
                                .filter(Boolean)
                                .map((f) => (
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
                ))}
            </div>
        </section>
    );
}

import { useEffect, useState } from 'react';
import styles from './pricings.module.scss';
import PricingCard from './pricing-card';
import type { PricingPlan } from '../types';

export default function Pricings() {
    const [plans, setPlans] = useState<PricingPlan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                const res = await fetch('http://localhost:5000/pricing-plans', {
                    signal: controller.signal,
                });

                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const data: PricingPlan[] = await res.json();
                setPlans(data);
            } catch (e) {
                if ((e as Error).name !== 'AbortError') {
                    setError('Не удалось загрузить тарифы');
                    console.error(e);
                }
            } finally {
                setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, []);

    return (
        <section className={styles.pricing}>
            {loading && <p className={styles.state}>Загрузка…</p>}
            {error && <p className={styles.state}>{error}</p>}

            <div className={styles.grid}>
                {plans.map((plan) => (
                    <PricingCard key={plan.id} plan={plan} />
                ))}
            </div>
        </section>
    );
}

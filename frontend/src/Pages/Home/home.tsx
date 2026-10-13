import { useEffect, useState } from 'react';
import Hero from './Hero/hero';
import Workflow from './Workflow/workflow';
import HowWeWork from './HowWeWork/how-we-work';
import OurTeam from './OurTeam/our-team';
import Project from './Project/project';
import GetStarted from './GetStarted/get-started';
import Testimonials from './Testimonials/testimonials';
import styles from './home.module.scss';
import type { TestimonialType } from './Testimonials/testimonial-type';
import type { PricingPlan } from './GetStarted/types';

export default function Home() {
    const [testimonials, setTestimonials] = useState<TestimonialType[] | null>(null);
    const [plans, setPlans] = useState<PricingPlan[] | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        Promise.all([
            fetch('http://localhost:5000/testimonials', { signal: controller.signal }).then(
                (r) => r.json() as Promise<TestimonialType[]>,
            ),
            fetch('http://localhost:5000/pricing-plans', { signal: controller.signal }).then(
                (r) => r.json() as Promise<PricingPlan[]>,
            ),
        ])
            .then(([t, p]) => {
                setTestimonials(t);
                setPlans(p);
            })
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            });

        return () => controller.abort();
    }, []);

    return (
        <main className={styles.main}>
            <Hero />
            <Workflow />
            <HowWeWork />
            <OurTeam />
            <Project />
            <GetStarted plans={plans} />
            <Testimonials items={testimonials} />
        </main>
    );
}

import { useState } from 'react';
import styles from './testimonials.module.scss';
import Testimonial from '../../../Components/Testimonial/testimonial';
import type { TestimonialType } from './testimonial-type';

const VISIBLE = 3;

type Props = {
    items: TestimonialType[] | null;
};

export default function Testimonials({ items }: Props) {
    const [page, setPage] = useState(0);

    if (!items) {
        return <div className={styles.loader}>Loading...</div>;
    }

    if (!items.length) return null;

    const pagesCount = Math.ceil(items.length / VISIBLE);

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.label}>Testimonial</span>
                <h2 className={styles.title}>
                    What do our clients say that we
                    <br />
                    never let down?
                </h2>
            </div>

            <div className={styles.viewport}>
                <div
                    className={styles.track}
                    style={{
                        transform: `translateX(-${page * 100}%)`,
                    }}>
                    {items.map((item) => (
                        <Testimonial key={item.id} data={item} />
                    ))}
                </div>
            </div>

            <div className={styles.dots}>
                {Array.from({ length: pagesCount }).map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
                        onClick={() => setPage(i)}
                        aria-label={`Page ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

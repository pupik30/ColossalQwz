import { useState } from 'react';
import styles from './faq.module.scss';
import { faqData } from './faq-data';

export default function Faq() {
    const [activeCategory, setActiveCategory] = useState(faqData[1].id);
    const [openId, setOpenId] = useState<number | null>(faqData[1].items[0].id);

    const category = faqData.find((c) => c.id === activeCategory) ?? faqData[0];

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const handleCategory = (id: string) => {
        setActiveCategory(id);
        const first = faqData.find((c) => c.id === id)?.items[0];
        setOpenId(first ? first.id : null);
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.label}>Pricing</span>
            </div>

            <h2 className={styles.title}>
                Frequently asked questions,
                <br />
                maybe the same as yours
            </h2>

            <div className={styles.divider} />

            <div className={styles.inner}>
                <aside className={styles.sidebar}>
                    {faqData.map((c) => (
                        <button
                            key={c.id}
                            className={`${styles.category} ${
                                c.id === activeCategory ? styles.categoryActive : ''
                            }`}
                            onClick={() => handleCategory(c.id)}>
                            {c.label}
                        </button>
                    ))}
                </aside>

                <div className={styles.list}>
                    {category.items.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                                <button
                                    className={styles.question}
                                    onClick={() => toggle(item.id)}
                                    aria-expanded={isOpen}>
                                    <span>{item.question}</span>
                                    <svg
                                        className={styles.chevron}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M6 9l6 6 6-6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                <div className={styles.answerWrap}>
                                    <div className={styles.answerInner}>
                                        <p className={styles.answer}>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

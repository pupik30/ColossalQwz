import { useState, type FormEvent, type ChangeEvent } from 'react';
import styles from './quote.module.scss';

interface FormState {
    name: string;
    email: string;
    company: string;
    companySize: string;
    problem: string;
}

const initialState: FormState = {
    name: '',
    email: '',
    company: '',
    companySize: '',
    problem: '',
};

export default function Quote() {
    const [form, setForm] = useState<FormState>(initialState);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('http://localhost:5000/quotes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error('Request failed');

            setForm(initialState);
            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                {/* левая колонка */}
                <div className={styles.info}>
                    <span className={styles.label}>Send Quote</span>

                    <h2 className={styles.title}>
                        Tell us about your problem
                        <br />
                        and how we can help
                    </h2>

                    <p className={styles.text}>
                        We are happy to help you, tell us what is the problem with your company, and
                        we are ready to answer these problems. It usually takes a few minutes for us
                        to respond.
                    </p>

                    <button type="button" className={styles.btnAsk}>
                        Ask Us
                    </button>
                </div>

                {/* правая колонка — форма */}
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.row}>
                        <label className={styles.field}>
                            <span className={styles.fieldLabel}>Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </label>

                        <label className={styles.field}>
                            <span className={styles.fieldLabel}>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </label>
                    </div>

                    <div className={styles.row}>
                        <label className={styles.field}>
                            <span className={styles.fieldLabel}>Company</span>
                            <input
                                type="text"
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </label>

                        <label className={styles.field}>
                            <span className={styles.fieldLabel}>Company Size</span>
                            <select
                                name="companySize"
                                value={form.companySize}
                                onChange={handleChange}
                                className={styles.input}>
                                <option value="" disabled hidden />
                                <option value="1-10">1–10</option>
                                <option value="11-50">11–50</option>
                                <option value="51-200">51–200</option>
                                <option value="200+">200+</option>
                            </select>
                        </label>
                    </div>

                    <label className={styles.field}>
                        <span className={styles.fieldLabel}>Tell Us Your Problem</span>
                        <textarea
                            name="problem"
                            value={form.problem}
                            onChange={handleChange}
                            required
                            className={styles.textarea}
                        />
                    </label>

                    <button
                        type="submit"
                        className={styles.btnSubmit}
                        disabled={status === 'loading'}>
                        {status === 'loading' ? 'Sending...' : 'Send Quote'}
                    </button>

                    {status === 'success' && (
                        <p className={styles.success}>Thanks! Your request has been sent.</p>
                    )}
                    {status === 'error' && (
                        <p className={styles.error}>Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
}

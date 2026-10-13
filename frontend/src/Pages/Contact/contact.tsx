import { useState, type FormEvent, type ChangeEvent } from 'react';
import styles from './contact.module.scss';
import { Photos } from '../../../Photos';

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialState: FormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export default function Contact() {
    const [form, setForm] = useState<FormState>(initialState);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('http://localhost:5000/contacts', {
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
                <div className={styles.info}>
                    <span className={styles.label}>Contact</span>

                    <h2 className={styles.title}>
                        We love receiving messages
                        <br />
                        from you, we are waiting
                        <br />
                        for it.
                    </h2>

                    <ul className={styles.contacts}>
                        <li className={styles.contactItem}>
                            <span className={styles.contactIcon}>
                                <img src={Photos.Icon.Phone} alt="" />
                            </span>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Phone</span>
                                <a href="tel:+6212348921" className={styles.contactValue}>
                                    +62 1234 8921
                                </a>
                            </div>
                        </li>

                        <li className={styles.contactItem}>
                            <span className={styles.contactIcon}>
                                <img src={Photos.Icon.Mail} alt="" />
                            </span>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Email</span>
                                <a
                                    href="mailto:support@qwzcollos.tld"
                                    className={styles.contactValue}>
                                    support@qwzcollos.tld
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

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

                    <label className={styles.field}>
                        <span className={styles.fieldLabel}>Subject</span>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </label>

                    <label className={styles.field}>
                        <span className={styles.fieldLabel}>Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className={styles.textarea}
                        />
                    </label>

                    <button
                        type="submit"
                        className={styles.btnSubmit}
                        disabled={status === 'loading'}>
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className={styles.success}>Thanks! We'll get back to you soon.</p>
                    )}
                    {status === 'error' && (
                        <p className={styles.error}>Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
}

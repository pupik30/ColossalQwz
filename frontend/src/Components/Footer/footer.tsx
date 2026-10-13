import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import { Photos } from '../../../Photos';

const services = [
    { label: 'UI Design', to: '/services/1' },
    { label: 'Development', to: '/services/2' },
    { label: 'Maintenance', to: '/services/3' },
];

const company = [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Send Quote', to: '/quote' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Term of Service', to: '/terms' },
    { label: 'Jobs', to: '/jobs' },
];

const resources = [
    { label: 'Support', to: '/support' },
    { label: 'Documentation', to: '/documentation' },
    { label: 'License', to: '/license' },
    { label: 'Sitemap', to: '/sitemap' },
];

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.cta}>
                    <h2 className={styles.ctaTitle}>
                        We've prepared everything, it's time
                        <br />
                        for you to tell the problem
                    </h2>

                    <div className={styles.ctaActions}>
                        <Link to="/quote" className={styles.btnPrimary}>
                            Send Quote
                        </Link>
                        <Link to="/contact" className={styles.btnSecondary}>
                            Ask Us
                        </Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.brand}>
                        <Link to="/" className={styles.logo}>
                            <img src={Photos.Icon.Box} alt="QwzCollos" />
                            <span>QwzCollos.</span>
                        </Link>

                        <p className={styles.copy}>Copyright © 2021</p>
                        <p className={styles.copy}>Design By QwzCollos LLC</p>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Services</h4>
                        <ul className={styles.colList}>
                            {services.map((item) => (
                                <li key={item.label}>
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <ul className={styles.colList}>
                            {company.map((item) => (
                                <li key={item.label}>
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Resources</h4>
                        <ul className={styles.colList}>
                            {resources.map((item) => (
                                <li key={item.label}>
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

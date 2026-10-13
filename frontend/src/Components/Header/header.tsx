import { Photos } from '../../../Photos.ts';
import { NavLink, Link } from 'react-router-dom';
import styles from './header.module.scss';
import Button from '../Button/button.tsx';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src={Photos.Icon.Buffer} alt="" />
                        <p className={styles.logoText}>QwzCollos.</p>
                    </a>
                </div>

                <nav className={styles.navigation}>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/work">How We Work</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>

                <Link to="/contact">
                    <Button text="Contact" />
                </Link>
            </div>
        </header>
    );
}

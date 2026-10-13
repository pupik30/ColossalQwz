import styles from './about-stats.module.scss';
import { Photos } from '../../../../Photos';

const stats = [
    { value: '8', label: 'Countries', icon: Photos.Icon.Box },
    { value: '193', label: 'Clients', icon: Photos.Icon.Figma },
    { value: '$100k', label: 'Earning', icon: Photos.Icon.Buffer },
];

const brands = [
    Photos.SocNet.GitHub,
    Photos.SocNet.Forbes,
    Photos.SocNet.Google,
    Photos.SocNet.Microsoft,
    Photos.SocNet.Facebook,
];

export default function AboutStats() {
    return (
        <section className={styles.stats}>
            <span className={styles.label}>Statistics</span>
            <h2 className={styles.title}>
                In 3 years we reached 8
                <br />
                countries, 193 clients and earning
                <br />
                $100k USD
            </h2>

            <ul className={styles.list}>
                {stats.map((s) => (
                    <li key={s.label} className={styles.item}>
                        <span className={styles.icon}>
                            <img src={s.icon} alt="" />
                        </span>
                        <div>
                            <p className={styles.value}>{s.value}</p>
                            <p className={styles.itemLabel}>{s.label}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <ul className={styles.brands}>
                {brands.map((b, i) => (
                    <li key={i}>
                        <img src={b} alt="" />
                    </li>
                ))}
            </ul>
        </section>
    );
}

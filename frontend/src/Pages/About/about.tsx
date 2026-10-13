import styles from './about.module.scss';
import AboutIntro from './AboutIntro/about-intro';
import AboutStats from './AboutStats/about-stats';
import AboutTeam from './AboutTeam/about-team';

export default function About() {
    return (
        <div className={styles.about}>
            <AboutIntro />
            <AboutStats />
            <AboutTeam />
        </div>
    );
}

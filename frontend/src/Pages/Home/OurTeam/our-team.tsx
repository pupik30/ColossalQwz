import styles from './our-team.module.scss';
import { Photos } from '../../../../Photos';
import Button from '../../../Components/Button/button';

export default function OurTeam() {
    return (
        <>
            <section className={styles.ourTeam}>
                <div className={styles.infoWork}>
                    <span className={styles.eyebrown}>OUR TEAM</span>

                    <h2 className={styles.title}>
                        We're a team of designers, engineers and analysts
                    </h2>

                    <p className={styles.description}>
                        Our team consists of many creative people. We are committed to maintaining
                        quality work as well as speed. These creative people work together to create
                        maximum work results.
                    </p>

                    <Button text="See Our Teams" />
                </div>

                <img src={Photos.TeamIllustration} alt="" loading="lazy" />
            </section>
        </>
    );
}

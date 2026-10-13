import styles from './workflow.module.scss';
import { Photos } from '../../../../Photos.ts';

export default function Workflow() {
    return (
        <section className={styles.workflow}>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <span className={styles.headingIcon}>
                        <img src={Photos.Icon.Figma} alt="" />
                    </span>

                    <div className={styles.text}>
                        <h2 className={styles.title}>Design</h2>
                        <p className={styles.description}>
                            The project interface will be designed first, our favorite tool is
                            Figma.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <span className={styles.headingIcon}>
                        <img src={Photos.Icon.Code} alt="" />
                    </span>

                    <div className={styles.text}>
                        <h2 className={styles.title}>Develop</h2>
                        <p className={styles.description}>
                            Transform design and write business logic here. Choose the technology
                            you want.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <span className={styles.headingIcon}>
                        <img src={Photos.Icon.Box} alt="" />
                    </span>

                    <div className={styles.text}>
                        <h2 className={styles.title}>Ship</h2>
                        <p className={styles.description}>
                            After the work is complete, we will send the project and all its assets
                            to you.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.socNetwork}>
                <img src={Photos.SocNet.GitHub} alt="" />
                <img src={Photos.SocNet.Forbes} alt="" />
                <img src={Photos.SocNet.Google} alt="" />
                <img src={Photos.SocNet.Microsoft} alt="" />
                <img src={Photos.SocNet.Facebook} alt="" />
            </div>
        </section>
    );
}

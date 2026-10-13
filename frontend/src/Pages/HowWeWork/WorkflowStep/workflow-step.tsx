import styles from './workflow-step.module.scss';
import { Photos } from '../../../../Photos';
import type { WorkStep } from '../work-steps';

interface Props {
    step: WorkStep;
}

export default function WorkflowStep({ step }: Props) {
    const image = Photos.Workflow[step.image] ?? Photos.Workflow.chat;

    return (
        <section className={`${styles.step} ${step.reversed ? styles.reversed : ''}`}>
            <div className={styles.media}>
                <img src={image} alt="" className={styles.image} />
            </div>

            <div className={styles.content}>
                <span className={styles.label}>{step.step}</span>
                <h2 className={styles.title}>{step.title}</h2>
                <p className={styles.text}>{step.text1}</p>
                <p className={styles.text}>{step.text2}</p>
            </div>
        </section>
    );
}

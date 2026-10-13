import styles from './how-we-work.module.scss';
import WorkflowHero from './WorkflowHero/workflow-hero';
import WorkflowStep from './WorkflowStep/workflow-step';
import { workSteps } from './work-steps';

export default function HowWeWork() {
    return (
        <div className={styles.page}>
            <WorkflowHero />

            <div className={styles.steps}>
                {workSteps.map((step) => (
                    <WorkflowStep key={step.id} step={step} />
                ))}
            </div>
        </div>
    );
}

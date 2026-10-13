import styles from './team-card.module.scss';
import { Photos } from '../../../../Photos';
import type { TeamMember } from './types';

interface Props {
    member: TeamMember;
}

export default function TeamCard({ member }: Props) {
    const photo = (Photos.Team as Record<string, string>)[member.photo] ?? Photos.Team.Albert;

    return (
        <article className={styles.card}>
            <div className={styles.photoWrap}>
                <img src={photo} alt={member.name} className={styles.photo} />
            </div>

            <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
            </div>
        </article>
    );
}

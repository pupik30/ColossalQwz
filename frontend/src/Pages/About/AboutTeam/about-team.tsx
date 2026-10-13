import { useEffect, useState } from 'react';
import styles from './about-team.module.scss';
import TeamCard from './team-card';
import { fetchTeam } from './team-api';
import type { TeamMember } from './types';

export default function AboutTeam() {
    const [members, setMembers] = useState<TeamMember[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        fetchTeam(controller.signal)
            .then(setMembers)
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            });
        return () => controller.abort();
    }, []);

    if (!members.length) return null;

    return (
        <section className={styles.team}>
            <span className={styles.label}>Our Team</span>
            <h2 className={styles.title}>
                Meet the team! All creative
                <br />
                people are here
            </h2>

            <div className={styles.grid}>
                {members.map((m) => (
                    <TeamCard key={m.id} member={m} />
                ))}
            </div>
        </section>
    );
}

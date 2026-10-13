import { useState } from 'react';
import styles from './projects.module.scss';
import ProjectsHero from './ProjectsHero/projects-hero';
import ProjectsGrid from './ProjectsGrid/projects-grid';

export default function Projects() {
    const [category, setCategory] = useState('all');

    return (
        <div className={styles.projects}>
            <ProjectsHero category={category} onChange={setCategory} />
            <ProjectsGrid category={category} />
        </div>
    );
}

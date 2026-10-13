import styles from './project.module.scss';
import Button from '../../../Components/Button/button';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

type DeviceType = 'mobile' | 'desktop';

interface Project {
    id: number;
    text: string;
    description: string;
    device_type: DeviceType;
}

const API_URL = 'http://localhost:5000';

export default function Project() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${API_URL}/projects`);

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data: Project[] = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Ошибка при загрузке проектов:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className={styles.project}>
            <span className={styles.eyebrown}>PROJECTS</span>

            <h2 className={styles.title}>
                We have completed many amazing projects that you will not believe
            </h2>

            <div className={styles.cards}>
                {loading ? (
                    <p>Загрузка...</p>
                ) : (
                    projects.map((project) => (
                        <div
                            className={`${styles.cardInner} ${
                                styles[`cardInner_${project.device_type}`]
                            }`}
                            key={project.id}>
                            <div className={styles.card}>
                                <div className={styles.skeletons}>
                                    <div className={styles.skeletonLong}></div>
                                    <div className={styles.skeletonShort}></div>
                                </div>

                                {project.device_type === 'mobile' && (
                                    <div className={styles.mobileSkeleton}></div>
                                )}
                                {project.device_type === 'desktop' && (
                                    <div className={styles.tableSkeleton}></div>
                                )}
                            </div>

                            <div className={styles.detail}>
                                <NavLink to={'/projects'}>
                                    <div className={styles.detailText}>
                                        <p className={styles.heading}>{project.text}</p>
                                        <p className={styles.text}>{project.description}</p>
                                    </div>
                                </NavLink>

                                <Button
                                    variant="border"
                                    text="Detail"
                                    to={`/projects/${project.id}`}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

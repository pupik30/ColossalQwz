import styles from './response-item.module.scss';
import { Photos } from '../../../../Photos';
import type { BlogResponse } from '../types';

interface Props {
    response: BlogResponse;
}

function timeAgo(iso: string): string {
    const diff = Date.now() - new Date(iso).getTime();
    const min = Math.floor(diff / 60000);
    if (min < 1) return 'just now';
    if (min < 60) return `${min} min ago`;
    const h = Math.floor(min / 60);
    if (h < 24) return `${h} h ago`;
    const d = Math.floor(h / 24);
    return `${d} d ago`;
}

export default function ResponseItem({ response }: Props) {
    const avatar = Photos.BlogAvatar[response.author_avatar] ?? Photos.BlogAvatar.Avatar4;

    return (
        <li className={styles.item}>
            <img src={avatar} alt={response.author_name} className={styles.avatar} />

            <div className={styles.body}>
                <div className={styles.head}>
                    <h3 className={styles.name}>{response.author_name}</h3>
                    <span className={styles.role}>{response.author_role}</span>
                    <span className={styles.time}>{timeAgo(response.created_at)}</span>
                </div>

                <p className={styles.text}>{response.text}</p>
            </div>
        </li>
    );
}

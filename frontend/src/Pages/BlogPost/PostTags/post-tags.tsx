import styles from './post-tags.module.scss';

interface Props {
    tags: string[] | null;
}

export default function PostTags({ tags }: Props) {
    if (!tags?.length) return null;

    return (
        <div className={styles.tags}>
            {tags.map((t) => (
                <span key={t} className={styles.tag}>
                    {t}
                </span>
            ))}
        </div>
    );
}

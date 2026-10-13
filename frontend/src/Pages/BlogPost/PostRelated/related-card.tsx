import { Link } from 'react-router-dom';
import styles from './related-card.module.scss';
import { Photos } from '../../../../Photos';
import type { BlogPost } from '../types';

interface Props {
    post: BlogPost;
}

export default function RelatedCard({ post }: Props) {
    const date = new Date(post.published_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    });

    const cover =
        (Photos.BlogCover as Record<string, string>)[post.cover] ?? Photos.BlogCover.Cover1;

    const avatar =
        (Photos.BlogAvatar as Record<string, string>)[post.author_avatar] ??
        Photos.BlogAvatar.Avatar4;

    return (
        <Link to={`/blog/${post.id}`} className={styles.card}>
            <div className={styles.coverWrap}>
                <img src={cover} alt={post.title} className={styles.cover} />
            </div>

            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>

            <div className={styles.author}>
                <img src={avatar} alt={post.author_name} className={styles.authorAvatar} />
                <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{post.author_name}</span>
                    <span className={styles.meta}>
                        {date} • {post.read_time} min read
                    </span>
                </div>
            </div>
        </Link>
    );
}

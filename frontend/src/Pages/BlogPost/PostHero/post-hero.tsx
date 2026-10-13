import styles from './post-hero.module.scss';
import { Photos } from '../../../../Photos';
import type { BlogPost } from '../types';

interface Props {
    post: BlogPost;
}

export default function PostHero({ post }: Props) {
    const date = new Date(post.published_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    });

    const cover =
        (Photos.BlogCover as Record<string, string>)[post.cover] ?? Photos.BlogCover.Cover1;

    return (
        <section className={styles.hero}>
            <div className={styles.head}>
                <span className={styles.label}>Page</span>
                <h1 className={styles.title}>{post.title}</h1>
                <span className={styles.meta}>
                    {date} • {post.read_time} min read
                </span>
            </div>

            <div className={styles.coverWrap}>
                <img src={cover} alt={post.title} className={styles.cover} />
            </div>
        </section>
    );
}

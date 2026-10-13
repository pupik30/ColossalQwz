import styles from './post-author.module.scss';
import { Photos } from '../../../../Photos';
import type { BlogPost } from '../types';

interface Props {
    post: BlogPost;
}

export default function PostAuthor({ post }: Props) {
    const avatar = Photos.BlogAvatar[post.author_avatar] ?? Photos.BlogAvatar.Avatar4;

    return (
        <section className={styles.author}>
            <img src={avatar} alt={post.author_name} className={styles.avatar} />

            <div className={styles.info}>
                <div className={styles.head}>
                    <div>
                        <h3 className={styles.name}>{post.author_name}</h3>
                        <span className={styles.role}>{post.author_role}</span>
                    </div>

                    <div className={styles.socials}>
                        <a href="#" aria-label="Twitter">
                            𝕏
                        </a>
                        <a href="#" aria-label="Facebook">
                            f
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            in
                        </a>
                    </div>
                </div>

                <p className={styles.text}>{post.author_bio}</p>
            </div>
        </section>
    );
}

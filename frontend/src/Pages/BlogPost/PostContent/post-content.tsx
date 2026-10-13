import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './post-content.module.scss';
import { Photos } from '../../../../Photos';
import type { BlogPost } from '../types';

interface Props {
    post: BlogPost;
}

const coverMap = Photos.BlogCover as Record<string, string>;

export default function PostContent({ post }: Props) {
    return (
        <section className={styles.content}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    img: ({ src, alt }) => {
                        const resolved = typeof src === 'string' ? (coverMap[src] ?? src) : '';
                        return <img src={resolved} alt={alt ?? ''} className={styles.image} />;
                    },
                }}>
                {post.content}
            </ReactMarkdown>
        </section>
    );
}

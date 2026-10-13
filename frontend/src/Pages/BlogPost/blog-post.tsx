import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './blog-post.module.scss';
import PostHero from './PostHero/post-hero';
import PostContent from './PostContent/post-content';
import PostTags from './PostTags/post-tags';
import PostAuthor from './PostAuthor/post-author';
import PostRelated from './PostRelated/post-related';
import PostResponses from './PostResponses/post-responses';
import PostCommentForm from './PostCommentForm/post-comment-form';
import { fetchPost } from './blog-post-api';
import type { BlogPost as BlogPostType } from './types';

export default function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const controller = new AbortController();

        setLoading(true);
        setPost(null);

        fetchPost(id, controller.signal)
            .then(setPost)
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [id]);

    if (loading) return <div className={styles.state}>Загрузка…</div>;

    if (!post) {
        return (
            <div className={styles.state}>
                <p>Статья не найдена</p>
                <Link to="/blog">← Вернуться к блогу</Link>
            </div>
        );
    }

    return (
        <article className={styles.post}>
            <PostHero post={post} />
            <PostContent post={post} />
            <PostTags tags={post.tags} />
            <PostAuthor post={post} />
            <PostRelated postId={post.id} />
            <PostResponses postId={post.id} />
            <PostCommentForm postId={post.id} />
        </article>
    );
}

import type { BlogPost } from './types';

const API = 'http://localhost:5000';

export async function fetchBlogPosts(
    limit: number,
    offset: number,
    signal?: AbortSignal,
): Promise<BlogPost[]> {
    const res = await fetch(`${API}/blog-posts?limit=${limit}&offset=${offset}`, { signal });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

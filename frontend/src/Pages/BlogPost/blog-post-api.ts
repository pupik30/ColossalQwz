import type { BlogPost, BlogResponse } from './types';

const API = 'http://localhost:5000';

export async function fetchPost(id: string | number, signal?: AbortSignal) {
    const res = await fetch(`${API}/blog-posts/${id}`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as BlogPost;
}

export async function fetchRelated(id: string | number, signal?: AbortSignal) {
    const res = await fetch(`${API}/blog-posts/${id}/related`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as BlogPost[];
}

export async function fetchResponses(id: string | number, signal?: AbortSignal) {
    const res = await fetch(`${API}/blog-posts/${id}/responses`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as BlogResponse[];
}

export async function postResponse(
    id: string | number,
    payload: { name: string; email: string; comment: string },
) {
    const res = await fetch(`${API}/blog-posts/${id}/responses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

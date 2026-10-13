import type { Project } from './types';

const API = 'http://localhost:5000';

export async function fetchProjects(category: string, signal?: AbortSignal): Promise<Project[]> {
    const params = new URLSearchParams();

    if (category && category !== 'all') {
        params.set('category', category);
    }

    const url = `${API}/projects${params.toString() ? `?${params}` : ''}`;
    const res = await fetch(url, { signal });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

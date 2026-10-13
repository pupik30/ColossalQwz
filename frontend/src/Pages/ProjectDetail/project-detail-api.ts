import type { Project } from './types';

const API = 'http://localhost:5000';

export async function fetchProject(id: string | number, signal?: AbortSignal) {
    const res = await fetch(`${API}/projects/${id}`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as Project;
}

export async function fetchOtherProjects(id: string | number, signal?: AbortSignal) {
    const res = await fetch(`${API}/projects?exclude=${id}`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as Project[];
}

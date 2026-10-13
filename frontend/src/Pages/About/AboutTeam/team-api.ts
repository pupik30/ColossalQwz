import type { TeamMember } from './types';

const API = 'http://localhost:5000';

export async function fetchTeam(signal?: AbortSignal): Promise<TeamMember[]> {
    const res = await fetch(`${API}/team`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

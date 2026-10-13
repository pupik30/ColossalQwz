export interface Project {
    id: number;
    text: string;
    description: string;
    device_type: 'mobile' | 'tablet' | 'desktop';
    category: string;
    client: string | null;
    technology: string | null;
    preview: string | null;
}

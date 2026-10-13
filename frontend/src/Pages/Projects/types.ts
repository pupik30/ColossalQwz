export type DeviceType = 'mobile' | 'desktop';

export interface Project {
    id: number;
    text: string;
    description: string;
    device_type: DeviceType;
    category: string;
    cover: string | null;
}

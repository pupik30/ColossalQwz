export interface ServiceFeature {
    icon:
        | 'IconCard'
        | 'Figma'
        | 'Clock'
        | 'Code'
        | 'Seo'
        | 'Fast'
        | 'fix'
        | 'Box'
        | 'Buffer'
        | 'Phone';
    title: string;
    text?: string;
}

export interface Service {
    id: number;
    label: string;
    title: string;
    text: string;
    image: 'uiDesign' | 'development' | 'maintenance';
    features: ServiceFeature[];
    reversed: boolean;
}

export const services: Service[] = [
    {
        id: 1,
        label: 'UI Design',
        title: "Don't let your idea get caught by others, design a prototype for your idea",
        text: 'Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes.',
        image: 'uiDesign',
        reversed: false,
        features: [
            {
                icon: 'IconCard',
                title: 'Beautiful Design',
                text: 'Create a modern design for your idea.',
            },
            {
                icon: 'Figma',
                title: 'Vivid Prototypes',
                text: 'Create vivid prototypes for your designs.',
            },
        ],
    },
    {
        id: 2,
        label: 'Development',
        title: 'Create solutions to repetitive problems, design applications and access anywhere!',
        text: 'Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.',
        image: 'development',
        reversed: true,
        features: [
            { icon: 'Phone', title: 'Mobile App Development' },
            { icon: 'Code', title: 'Desktop App Development' },
            { icon: 'Box', title: 'Web Development' },
        ],
    },
    {
        id: 3,
        label: 'Maintenance',
        title: 'Think of your server as your own child, taking care of it every day',
        text: 'We will back up your servers every day, clean them every week, upgrade them when there is an update.',
        image: 'maintenance',
        reversed: false,
        features: [
            { icon: 'Clock', title: 'Back up every day' },
            { icon: 'Fast', title: 'Upgrade' },
            { icon: 'Seo', title: 'Cleaning every week' },
            { icon: 'fix', title: 'Fixing error' },
        ],
    },
];

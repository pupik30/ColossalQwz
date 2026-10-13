export interface ServiceFeature {
    icon: string;
    title: string;
    text: string;
}

export interface ServiceDetailData {
    id: number;
    label: string;
    heroTitle: string;
    intro: string;
    introExtra: string;
    bullets: string[];
    preview: 'uiDesign' | 'development' | 'maintenance';
    features: ServiceFeature[];
    faq: { question: string; answer: string }[];
}

export const serviceDetails: Record<number, ServiceDetailData> = {
    1: {
        id: 1,
        label: 'UI Design',
        heroTitle: 'Design a prototype for your idea',
        intro: 'Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes.',
        introExtra:
            'We create a modern, clean design and deliver it as Figma files with all components and styles documented.',
        bullets: [
            'Full design system in Figma',
            'Interactive prototype',
            'All assets and icons',
            'Handoff with documentation',
        ],
        preview: 'uiDesign',
        features: [
            {
                icon: 'Figma',
                title: 'Design Files',
                text: 'Projects are well designed using Figma. You will get the design file.',
            },
            {
                icon: 'Clock',
                title: 'Same Day',
                text: "We don't want you to wait long. Everything will be finished on the same day.",
            },
            {
                icon: 'Code',
                title: 'Quality Code',
                text: 'Code written according to good practice is highly maintainable.',
            },
            {
                icon: 'Seo',
                title: 'SEO',
                text: 'The website will appear on the first page of the search engine.',
            },
            {
                icon: 'IconCard',
                title: 'Responsive Design',
                text: "Access the website on any device, don't limit your visitors.",
            },
            {
                icon: 'Fast',
                title: 'Blazing Fast',
                text: 'A high speed website will not disappoint prospective customers.',
            },
        ],
        faq: [
            {
                question: 'How is the payment system?',
                answer: 'If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.',
            },
            {
                question: 'Can I consult first?',
                answer: 'Of course you can consult us first. We are very happy to help your problems and provide our best solutions.',
            },
            {
                question: 'What if the project stops halfway?',
                answer: 'We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded.',
            },
            {
                question: 'Does it include servers and domains?',
                answer: "You don't need to think about anything else, we have everything prepared.",
            },
            {
                question: 'Will I get the source code?',
                answer: 'When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you.',
            },
            {
                question: 'Is there a warranty?',
                answer: '1 year warranty for our errors or mistakes.',
            },
        ],
    },

    2: {
        id: 2,
        label: 'Development',
        heroTitle: "Solve your company's repetitive problems by designing apps",
        intro: 'Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.',
        introExtra:
            'We can build you a website, a mobile app and a desktop app. All types of applications have a good security system, are easy to maintain, and are high speed.',
        bullets: [
            'Avoid potential bugs with unit testing',
            'Removing unused code will speed up the application',
            'The modern design pleases the users',
            'A good UX will not disappoint users',
        ],
        preview: 'development',
        features: [
            {
                icon: 'Figma',
                title: 'Design Files',
                text: 'Projects are well designed using Figma. You will get the design file.',
            },
            {
                icon: 'Clock',
                title: 'Same Day',
                text: "We don't want you to wait long. Everything will be finished on the same day.",
            },
            {
                icon: 'Code',
                title: 'Quality Code',
                text: 'Code written according to good practice is highly maintainable.',
            },
            {
                icon: 'Seo',
                title: 'SEO',
                text: 'The website will appear on the first page of the search engine.',
            },
            {
                icon: 'IconCard',
                title: 'Responsive Design',
                text: "Access the website on any device, don't limit your visitors.",
            },
            {
                icon: 'Fast',
                title: 'Blazing Fast',
                text: 'A high speed website will not disappoint prospective customers.',
            },
        ],
        faq: [
            {
                question: 'How is the payment system?',
                answer: 'If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.',
            },
            { question: 'Can I consult first?', answer: 'Of course you can consult us first.' },
            {
                question: 'What if the project stops halfway?',
                answer: 'We promise to always finish the project on time.',
            },
            {
                question: 'Does it include servers and domains?',
                answer: "You don't need to think about anything else, we have everything prepared.",
            },
            {
                question: 'Will I get the source code?',
                answer: 'When the project is 100% complete, all the resources will be provided to you.',
            },
            {
                question: 'Is there a warranty?',
                answer: '1 year warranty for our errors or mistakes.',
            },
        ],
    },

    3: {
        id: 3,
        label: 'Maintenance',
        heroTitle: 'Think of your server as your own child, taking care of it every day',
        intro: 'We will back up your servers every day, clean them every week, upgrade them when there is an update.',
        introExtra:
            'Our team monitors your infrastructure 24/7 and reacts to incidents before they affect your users.',
        bullets: [
            'Daily backups with off-site storage',
            'Weekly cleanup and optimization',
            'Automatic security updates',
            'Priority support within 1 hour',
        ],
        preview: 'maintenance',
        features: [
            {
                icon: 'Figma',
                title: 'Design Files',
                text: 'Projects are well designed using Figma.',
            },
            {
                icon: 'Clock',
                title: 'Same Day',
                text: 'Everything will be finished on the same day.',
            },
            { icon: 'Code', title: 'Quality Code', text: 'Code is highly maintainable.' },
            { icon: 'Seo', title: 'SEO', text: 'The website will appear on the first page.' },
            { icon: 'IconCard', title: 'Responsive Design', text: 'Access on any device.' },
            { icon: 'Fast', title: 'Blazing Fast', text: 'A high speed website.' },
        ],
        faq: [
            {
                question: 'How is the payment system?',
                answer: 'If the project has agreed, you will pay an advance.',
            },
            { question: 'Can I consult first?', answer: 'Of course you can consult us first.' },
            {
                question: 'What if the project stops halfway?',
                answer: 'We promise to always finish the project on time.',
            },
            {
                question: 'Does it include servers and domains?',
                answer: "You don't need to think about anything else.",
            },
            {
                question: 'Will I get the source code?',
                answer: 'When the project is 100% complete, all the resources will be provided to you.',
            },
            { question: 'Is there a warranty?', answer: '1 year warranty.' },
        ],
    },
};

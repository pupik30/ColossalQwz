// faqData.ts
export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

export interface FaqCategory {
    id: string;
    label: string;
    items: FaqItem[];
}

export const faqData: FaqCategory[] = [
    {
        id: 'general',
        label: 'General',
        items: [
            {
                id: 1,
                question: 'How is the payment system?',
                answer: 'If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.',
            },
            {
                id: 2,
                question: 'Can I consult first?',
                answer: 'Yes, we offer a free 30-minute consultation to discuss your project and requirements before you commit.',
            },
            {
                id: 3,
                question: 'What if the project stops halfway?',
                answer: 'You only pay for the work that has been completed. We will hand over all files and materials produced up to that point.',
            },
            {
                id: 4,
                question: 'Will I get the source code?',
                answer: 'Yes, after the final payment all source code and assets are transferred to you.',
            },
            {
                id: 5,
                question: 'Does it include servers and domains?',
                answer: 'The base price does not include hosting or domains, but we can set them up for you at cost.',
            },
            {
                id: 6,
                question: 'Is there a warranty?',
                answer: 'Yes, we provide a 30-day warranty for any bugs or issues found after the project is delivered.',
            },
        ],
    },
    {
        id: 'transaction',
        label: 'Transaction',
        items: [
            {
                id: 7,
                question: 'Which payment methods do you accept?',
                answer: 'We accept bank transfers, credit cards, and PayPal. For large projects, we can also arrange installment payments.',
            },
            {
                id: 8,
                question: 'Can I get a refund?',
                answer: 'Refunds are possible before the project starts, or if we fail to deliver according to the agreed scope.',
            },
        ],
    },
    {
        id: 'maintenance',
        label: 'Maintenance',
        items: [
            {
                id: 9,
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we offer monthly maintenance plans that cover updates, bug fixes, and small improvements.',
            },
        ],
    },
    {
        id: 'technology',
        label: 'Technology',
        items: [
            {
                id: 10,
                question: 'Which tech stack do you use?',
                answer: 'We mostly work with React, TypeScript, Node.js, and PostgreSQL, but we adapt to your existing stack if needed.',
            },
            {
                id: 11,
                question: 'Can you work with legacy code?',
                answer: 'Yes, we have experience modernizing legacy codebases and gradually migrating them to modern stacks.',
            },
        ],
    },
];

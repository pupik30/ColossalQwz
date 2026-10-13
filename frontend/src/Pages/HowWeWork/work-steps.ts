export interface WorkStep {
    id: number;
    step: string;
    title: string;
    text1: string;
    text2: string;
    image: 'chat' | 'planning' | 'ship';
    reversed: boolean;
}

export const workSteps: WorkStep[] = [
    {
        id: 1,
        step: 'STEP 01',
        title: "Let's talk about your company's problems first",
        text1: 'After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem.',
        text2: 'In this step, you will discuss what application to build.',
        image: 'chat',
        reversed: false,
    },
    {
        id: 2,
        step: 'STEP 02',
        title: 'Doing planning, design and development until everything is finished',
        text1: 'When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development.',
        text2: 'In this step, the application is 100% complete.',
        image: 'planning',
        reversed: true,
    },
    {
        id: 3,
        step: 'STEP 03',
        title: 'The project is complete and we ship all the project assets, and access to the server',
        text1: "We will be responsible for delivering all the project assets to you, don't worry. These assets include, design files, source code, server access, and so on.",
        text2: 'In this step, everything is done and the contract ends.',
        image: 'ship',
        reversed: false,
    },
];

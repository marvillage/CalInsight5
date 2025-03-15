export interface BehaviorReport {
    date: string;
    interactionCount: number;
    politenessScore: number;
    responsivenessScore: number;
    helpfulnessScore: number;
    overallScore: number;
    comments: string;
}

export const BehaviorReport: BehaviorReport[] = [
    {
        date: "20 Oct 2024",
        interactionCount: 1,
        politenessScore: 4.92,
        responsivenessScore: 4.87,
        helpfulnessScore: 4.95,
        overallScore: 4.91,
        comments: "Employee Shahswat demonstrated polite, prompt, and helpful service in this interaction."
    },
    {
        date: "20 Oct 2024",
        interactionCount: 1,
        politenessScore: 4.90,
        responsivenessScore: 4.85,
        helpfulnessScore: 4.88,
        overallScore: 4.88,
        comments: "Employee Shahswat demonstrated polite, prompt, and helpful service in this interaction."
    },
    {
        date: "19 Oct 2024",
        interactionCount: 1,
        politenessScore: 4.89,
        responsivenessScore: 4.91,
        helpfulnessScore: 4.92,
        overallScore: 4.91,
        comments: "Employee Shahswat demonstrated polite, prompt, and helpful service in this interaction."
    },
    {
        date: "18 Oct 2024",
        interactionCount: 1,
        politenessScore: 4.85,
        responsivenessScore: 4.90,
        helpfulnessScore: 4.93,
        overallScore: 4.89,
        comments: "Employee Shahswat demonstrated polite, prompt, and helpful service in this interaction."
    },
    {
        date: "18 Oct 2024",
        interactionCount: 1,
        politenessScore: 4.95,
        responsivenessScore: 4.90,
        helpfulnessScore: 4.88,
        overallScore: 4.91,
        comments: "Employee Shahswat demonstrated polite, prompt, and helpful service in this interaction."
    }
];

export default BehaviorReport;

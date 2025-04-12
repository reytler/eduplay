export type Question = {
    id: number;
    text: string;
    alternatives: ALternative[];
}

export type ALternative = {
    id: number;
    text: string;
    isCorrect: boolean;
}

const questions: Question[] = [
    {
        id: 1,
        text: "Qual é a capital do Brasil?",
        alternatives: [
            { id: 1, text: "Brasília", isCorrect: true },
            { id: 2, text: "Rio de Janeiro", isCorrect: false },
            { id: 3, text: "São Paulo", isCorrect: false },
            { id: 4, text: "Salvador", isCorrect: false },
        ],
    },
    {
        id: 2,
        text: "Qual é o maior planeta do sistema solar?",
        alternatives: [
            { id: 1, text: "Terra", isCorrect: false },
            { id: 2, text: "Marte", isCorrect: false },
            { id: 3, text: "Júpiter", isCorrect: true },
            { id: 4, text: "Saturno", isCorrect: false },
        ],
    },
];

export function getQuestions(): Question[] {
    return questions;
}
import { shuffleArray } from './utils';

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

// Local questions data with three categories
const localQuestions: Question[] = [
    {
        category: "General Knowledge",
        correct_answer: "Mount Everest",
        difficulty: Difficulty.EASY,
        incorrect_answers: ["K2", "Kangchenjunga", "Lhotse"],
        question: "What is the highest mountain in the world?",
        type: "multiple"
    },
    {
        category: "Science & Nature",
        correct_answer: "Mars",
        difficulty: Difficulty.MEDIUM,
        incorrect_answers: ["Venus", "Jupiter", "Saturn"],
        question: "Which planet is known as the Red Planet?",
        type: "multiple"
    },
    {
        category: "Entertainment",
        correct_answer: "The Godfather",
        difficulty: Difficulty.HARD,
        incorrect_answers: ["Scarface", "Goodfellas", "The Irishman"],
        question: "Which movie won the Oscar for Best Picture in 1972?",
        type: "multiple"
    },
    {
        category: "General Knowledge",
        correct_answer: "Pacific Ocean",
        difficulty: Difficulty.EASY,
        incorrect_answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        question: "What is the largest ocean in the world?",
        type: "multiple"
    },
    {
        category: "Science & Nature",
        correct_answer: "Einstein",
        difficulty: Difficulty.MEDIUM,
        incorrect_answers: ["Newton", "Galileo", "Tesla"],
        question: "Who developed the theory of relativity?",
        type: "multiple"
    },
    {
        category: "Entertainment",
        correct_answer: "Star Wars",
        difficulty: Difficulty.HARD,
        incorrect_answers: ["Star Trek", "Guardians of the Galaxy", "Battlestar Galactica"],
        question: "Which 1977 sci-fi movie became a cultural phenomenon?",
        type: "multiple"
    },
    {
        category: "General Knowledge",
        correct_answer: "China",
        difficulty: Difficulty.EASY,
        incorrect_answers: ["India", "USA", "Russia"],
        question: "Which country has the largest population in the world?",
        type: "multiple"
    },
    {
        category: "Science & Nature",
        correct_answer: "Oxygen",
        difficulty: Difficulty.MEDIUM,
        incorrect_answers: ["Nitrogen", "Hydrogen", "Carbon Dioxide"],
        question: "What is the most abundant gas in the Earth's atmosphere?",
        type: "multiple"
    },
    {
        category: "Entertainment",
        correct_answer: "The Beatles",
        difficulty: Difficulty.HARD,
        incorrect_answers: ["The Rolling Stones", "Led Zeppelin", "Pink Floyd"],
        question: "Which band released the album 'Abbey Road'?",
        type: "multiple"
    },
    {
        category: "General Knowledge",
        correct_answer: "Albert Einstein",
        difficulty: Difficulty.EASY,
        incorrect_answers: ["Isaac Newton", "Nikola Tesla", "Stephen Hawking"],
        question: "Who is famous for developing the theory of relativity?",
        type: "multiple"
    },
];

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    // Filter questions based on difficulty
    const filteredQuestions = localQuestions.filter(question => question.difficulty === difficulty);

    // Shuffle the filtered questions to ensure randomness
    const shuffledQuestions = shuffleArray(filteredQuestions);

    // Select the desired amount of questions (if there are fewer, just return all available)
    const selectedQuestions = shuffledQuestions.slice(0, amount);

    // Map questions to the same structure as before and shuffle the answers
    return selectedQuestions.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }));
};

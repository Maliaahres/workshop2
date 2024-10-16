import { shuffleArray } from './utils';

export type Question = {
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

// Local questions data without categories
const localQuestions: Question[] = [
    {
        correct_answer: " Son mot de passe",
        difficulty: Difficulty.EASY,
        incorrect_answers: [" Son adresse email", "Son nom complet", "Toutes les réponses ci-dessus"],
        question: "Quelle information personnelle ne faut-il jamais partager en ligne ?",
        type: "multiple"
    },
    {
        correct_answer: "Vérifier si c'est quelqu'un que tu connais vraiment",
        difficulty: Difficulty.EASY,
        incorrect_answers: ["Accepter directement sans réfléchir", "Demander à un ami de vérifier", "Lui envoyer ton mot de passe"],
        question: "Que dois-tu faire avant d'accepter un nouvel ami sur les réseaux sociaux ?",
        type: "multiple"
    },
    {
        correct_answer: "Utiliser un mot de passe long et unique, et activer la double authentification",
        difficulty: Difficulty.EASY,
        incorrect_answers: ["Utiliser le même mot de passe partout", "Partager ton mot de passe avec tes amis", "d) Ne jamais se déconnecter de ses comptes"],
        question: "Quel est le meilleur moyen de protéger ton compte ?",
        type: "multiple"
    },
    {
        correct_answer: "Ne jamais les donner et signaler la personne si elle insiste",
        difficulty: Difficulty.EASY,
        incorrect_answers: ["Les donner si la personne semble gentille", "Les donner seulement si tu la connais un peu", "d) Ne jamais donner d'informations"],
        question: "Que faire si quelqu'un te demande des informations personnelles en ligne ?",
        type: "multiple"
    },
    {
        correct_answer: "Bloquer la personne et signaler le compte",
        difficulty: Difficulty.EASY,
        incorrect_answers: ["Ignorer et continuer à discuter avec la personne", "Répondre de manière agressive", "d) Fermer ton compte immédiatement"],
        question: "Comment réagir si quelqu'un te harcèle sur les réseaux sociaux ?",
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

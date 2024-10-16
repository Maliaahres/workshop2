import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Ensure correct import
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
import Layout from './components/Layout.tsx'; // Import the layout component
// types
import { QuestionsState, Difficulty } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

// Home and other components
import Home from './components/Home.jsx.tsx';
import VideoIntro from "./components/VideoIntro.jsx.tsx";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const Quiz: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionsState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [videoEnded, setVideoEnded] = useState(false);

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);
        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;
            if (correct) setScore((prev) => prev + 1);
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        const nextQ = number + 1;
        if (nextQ === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQ);
        }
    };
    const handleVideoEnd = () => {
        setVideoEnded(true); // Set video ended state to true
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>QUIZ</h1>
                {videoEnded ? (
                    gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                        <button className='start' onClick={startTrivia}>
                            Start
                        </button>
                    ) : null
                ) : (
                    <VideoIntro onVideoEnd={handleVideoEnd} /> // Render VideoIntro component
                )}
                {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <button className='start' onClick={startTrivia}>
                        Start
                    </button>
                ) : null}
                {!gameOver ? <p className='score'>Score: {score}</p> : null}
                {loading ? <p>Loading Questions...</p> : null}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNr={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                        callback={checkAnswer}
                    />
                )}
                {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                    <button className='next' onClick={nextQuestion}>
                        Next Question
                    </button>
                ) : null}
            </Wrapper>
        </>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/* Define child routes that will render inside the layout */}
                        <Route index element={<Home />} />
                        <Route path="quiz" element={<Quiz />} />
                    </Route>
                </Routes>
            </Wrapper>
        </Router>
    );
};

export default App;

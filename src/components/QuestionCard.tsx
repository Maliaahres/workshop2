import React from 'react';
// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
    correctAnswersCount: number;
    onRetry: () => void;
};

const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           callback,
                                           userAnswer,
                                           questionNr,
                                           totalQuestions,
                                           correctAnswersCount,
                                           onRetry,
                                       }) => (
    <Wrapper>
        <p className='number'>
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map((answer) => (
                <ButtonWrapper
                    key={answer}
                    $correct={userAnswer?.correctAnswer === answer}
                    $userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
        {correctAnswersCount === 7 && (
            <ButtonWrapper $correct $userClicked>
                <button onClick={onRetry}>Retry</button>
            </ButtonWrapper>
        )}
    </Wrapper>
);

export default QuestionCard;
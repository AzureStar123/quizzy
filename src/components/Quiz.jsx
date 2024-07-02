import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {

    const [selectedAnswers, setSelectedAnswers] = useState([])

    const activeQuestionIndex = selectedAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length



    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setSelectedAnswers((prevState) => [...prevState, answer])
    }, [activeQuestionIndex])

    const handleSkipQuestion = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) return <div id={"summary"}>
        <img src={quizCompleteImg} alt={"Quiz Completed Img"}/>
        <h2>Quiz completed</h2>
    </div>
    else return <div id={"quiz"}>
        <Question key={activeQuestionIndex} index={activeQuestionIndex} onSelectAnswer={handleSelectAnswer} onSkipQuestion={handleSkipQuestion}/>
    </div>
}
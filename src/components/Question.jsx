import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../questions.js";
import Answers from "./Answers.jsx";
import {useState} from "react";

export default function Question({index, onSelectAnswer, onSkipQuestion}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        state: "unanswered"
    })

    const answers = QUESTIONS[index].answers

    const [time, setTime] = useState(10)

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            state: "answered"
        })
        setTime(3)
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                state: answers[0] === answer ? "correct" : "wrong"
            })
            setTimeout(() => {
                setAnswer({selectedAnswer: [], isCorrect: null})
                onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    return <div id={"question"}>
        <QuestionTimer key={time} timeInSeconds={time} onFinish={onSkipQuestion} mode={time === 3 ? "answered" : ""}/>
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
            answers={answers}
            selectedAnswer={answer.selectedAnswer}
            state={answer.state}
            handleSelectAnswer={handleSelectAnswer}
        />
    </div>
}
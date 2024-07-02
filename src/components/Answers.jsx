import {useRef} from "react";
import QUESTIONS from "../questions.js";

export default function Answers({answers, selectedAnswer, state, handleSelectAnswer}) {

    const shuffledAnswers = useRef(undefined)
    if (!shuffledAnswers.current)
        shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5)


    return <ul id={"answers"}>
        {
            shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer
                let cssClasses = ""

                if (isSelected && state === "answered") {
                    cssClasses = "selected"
                } else if ((state === "correct" || state === "wrong") && isSelected) {
                    cssClasses = state
                }

                return <li key={answer} className={"answer"}>
                    <button className={cssClasses} disabled={state !== "unanswered"} onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                </li>
            })
        }
    </ul>
}
import {useEffect, useState} from "react";

export default function QuestionTimer({timeInSeconds, onFinish, mode}) {

    const timeInMilliseconds = timeInSeconds * 1000

    const [timeRemaining, setTimeRemaining] = useState(timeInMilliseconds)

    if (timeRemaining <= 0) {
        onFinish()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(prevState =>
                prevState - 100
            )
        }, 100)
        return () => clearInterval(interval)
    }, [onFinish])

    return <progress id={"question-time"} value={timeInMilliseconds - timeRemaining} max={timeInMilliseconds} className={mode}/>
}
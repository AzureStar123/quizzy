import QuizLogo from "../assets/quiz-logo.png"
export default function Header() {
    return (
        <header>
            <img src={QuizLogo} alt={""}/>
            <h1>React Quiz</h1>
        </header>
    );
}
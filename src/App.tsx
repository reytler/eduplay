import { useState } from "react";
import { getQuestions } from "./services/questions";
import { QuestionComponent } from "./components/QuestionCompent";

function App() {

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  function handleNextQuestion() {
    if(currentQuestion <= getQuestions().length){
      setCurrentQuestion(prev=>prev + 1);
    }
  }

  return (
    <div>
      <h1>Eduplay</h1>
      <QuestionComponent question={getQuestions()[currentQuestion]} handleNextQuestion={handleNextQuestion}/>
    </div>
  )
}

export default App

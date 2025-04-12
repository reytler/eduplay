import { Question } from "../services/questions";
import { AlternativeComponent } from "./AlternativeComponent";

type QuestionComponentProps = {
    question: Question;
    handleNextQuestion: () => void;
}

export function QuestionComponent({question}:QuestionComponentProps){
    return (
        <div>
           <h2>{question.text}</h2>
           <div className="flex flex-row gap-3 w-[100vw]">
            {question.alternatives.map((alternative) => (
                <AlternativeComponent alternative={alternative} onClick={()=>{}}/>
            ))}
           </div>
        </div>
    )
}
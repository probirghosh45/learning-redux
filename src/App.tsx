import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {

  const {quizComplete} = useAppSelector((state) => state.quiz)

  console.log(quizComplete)

  
  return (
    <div className="flex flex-col items-center mt-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-600 tracking-wide text-center drop-shadow-md">
        জুলাই গণ-অভ্যুত্থান কুইজ প্রতিযোগিতা
      </h1>
      <div className="w-full max-w-xl mt-6">
        {!quizComplete ? <Question/> : <QuizSummary/>}
      </div>
    </div>
  );
}

export default App;

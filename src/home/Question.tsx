import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControls from "./QuizControls";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { Check } from "lucide-react";

export default function Question() {
  const { questions, currentQuesIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuesIndex];
  const currentAnswer = userAnswer[currentQuesIndex];
  const dispatch = useAppDispatch();

  const handleQuestionAnswer = (selectedOption: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuesIndex,
        answer: selectedOption,
      })
    );
  };
  return (
    <div className="flex justify-center mt-8 px-3">
      <Card className="w-full max-w-[500px] shadow-lg border border-gray-200 rounded-2xl">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-2xl text-white -mt-6">
          <CardTitle className="text-lg font-semibold">
            {currentQuestion?.question}
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-4">
          <div className="grid gap-3">
            {currentQuestion?.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleQuestionAnswer(option)}
                className={`w-full justify-between px-4 py-2 rounded-lg transition-all duration-200 ease-in-out flex items-center
            ${
              option === currentAnswer
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50 hover:border-indigo-400"
            }
          `}
              >
                <span>{option}</span>
                {option === currentAnswer && (
                  <Check size={18} className="text-white" />
                )}
              </Button>
            ))}
          </div>
          <QuizControls />
        </CardContent>
      </Card>
    </div>
  );
}

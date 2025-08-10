import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, previousQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppSelector } from "@/redux/hooks";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function QuizControls() {
  const dispatch = useDispatch();
  const { currentQuesIndex, userAnswer, questions } = useAppSelector(
    (state) => state.quiz
  );

  const isAnswerSelected = userAnswer[currentQuesIndex] !== null;
  const isFirstQuestion = currentQuesIndex === 0;
  const isLastQuestion = currentQuesIndex === questions.length - 1;

  const handleNext = () => {
    if (!isAnswerSelected) {
      toast.error("Please select an answer before proceeding.", {
        style: {
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    dispatch(nextQuestion());
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  const handleSubmit = () => {
    if (!isAnswerSelected) {
      toast.error("Please select an answer before submitting.", {
        style: {
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    toast.success("✅ Your answers have been submitted successfully!", {
      style: {
        borderRadius: "8px",
        background: "#333",
        color: "#fff",
      },
    });

    dispatch(completeQuiz())
  };

  return (
    <div className="flex justify-between mt-6 px-2">
      {isFirstQuestion ? (
        <div className="w-[120px]"></div> // spacing fix
      ) : (
        <Button
          variant="outline"
          className="px-5 py-2 rounded-lg border-gray-300 hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-200 flex items-center gap-2"
          onClick={handlePrevious}
        >
          <ArrowLeft size={18} />
          Previous
        </Button>
      )}

      {isLastQuestion ? (
        <Button
          className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all duration-200 flex items-center gap-2"
          onClick={handleSubmit}
        >
          Submit Answers
          <CheckCircle2 size={18} />
        </Button>
      ) : (
        <Button
          className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition-all duration-200 flex items-center gap-2"
          onClick={handleNext}
        >
          Next
          <ArrowRight size={18} />
        </Button>
      )}
    </div>
  );
}

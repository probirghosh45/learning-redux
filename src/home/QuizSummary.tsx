import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";
import * as Progress from "@radix-ui/react-progress";
import { CheckCircle, XCircle, Award } from "lucide-react";

// Helper function to get performance rating and color
const getPerformance = (percentage: number) => {
  if (percentage >= 90) {
    return { rating: "Excellent", color: "bg-green-600", badge: "text-green-600" };
  } else if (percentage >= 50) {
    return { rating: "Good", color: "bg-yellow-500", badge: "text-yellow-500" };
  } else if (percentage >= 30) {
    return { rating: "Needs Improvement", color: "bg-orange-500", badge: "text-orange-500" };
  } else {
    return { rating: "Poor", color: "bg-red-500", badge: "text-red-500" };
  }
};

export default function QuizSummary() {
  const { questions, userAnswer } = useAppSelector((state) => state.quiz);

  // Calculate scores
  const correctAnswersCount = questions.reduce((count, question, index) => {
    return question.correctAnswer === userAnswer[index] ? count + 1 : count;
  }, 0);

  const incorrectAnswersCount = questions.length - correctAnswersCount;
  const correctPercentage = parseFloat(
    ((correctAnswersCount / questions.length) * 100).toFixed(2)
  );

  const { rating, color, badge } = getPerformance(correctPercentage);

  return (
    <Card className="max-w-lg mx-auto p-6 rounded-2xl shadow-2xl bg-white">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-extrabold text-indigo-600">📊 Quiz Summary</h2>
        <p className="text-sm text-gray-500">Here’s how you performed</p>
      </CardHeader>
      <CardContent>
        {/* Score */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-medium text-gray-700">
            You got <span className="font-bold text-green-600">{correctAnswersCount}</span> out of{" "}
            <span className="font-bold">{questions.length}</span> correct!
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <Progress.Root className="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <Progress.Indicator
              className={`h-full transition-all duration-500 ease-in-out ${color}`}
              style={{ width: `${correctPercentage}%` }}
            />
          </Progress.Root>
          <div className="flex justify-between mt-2 text-sm font-medium text-gray-600">
            <span>{correctPercentage}%</span>
            <span className={`font-semibold ${badge}`}>Performance: {rating}</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="flex flex-col items-center bg-green-50 p-3 rounded-xl">
            <CheckCircle className="text-green-500 mb-1" size={22} />
            <p className="text-sm font-semibold">{correctAnswersCount} Correct</p>
          </div>
          <div className="flex flex-col items-center bg-red-50 p-3 rounded-xl">
            <XCircle className="text-red-500 mb-1" size={22} />
            <p className="text-sm font-semibold">{incorrectAnswersCount} Incorrect</p>
          </div>
        </div>

        {/* Final Note */}
        <div className="mt-6 text-center">
          <Award className="inline-block text-indigo-500 mb-1" size={20} />
          <p className="text-sm text-gray-600">
            {rating === "Excellent"
              ? "Outstanding performance! 🎉"
              : rating === "Good"
              ? "Well done! Keep improving. 💪" 
              : "Don’t give up! Practice makes perfect. 🚀"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

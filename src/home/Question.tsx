import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";

export default function Question() {
  const { questions } = useAppSelector((state) => state.quiz);
  const currentQuestion = questions[0];
  console.log(currentQuestion);

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
                className="w-full justify-start px-4 py-2 rounded-lg border-gray-300 hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-200 ease-in-out"
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

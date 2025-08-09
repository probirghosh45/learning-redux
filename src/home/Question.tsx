import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";

export default function Question() {
  const { questions } = useAppSelector((state) => state.quiz);
  const currentQuestion = questions[0];
  console.log(currentQuestion);

  return (
    <div className="flex justify-center mt-5">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <div className="flex flex-wrap items-center gap-2 md:flex-row" >
                <Button className="my-1" variant ="outline" key={index}>{option}</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

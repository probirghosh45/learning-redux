import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function QuizControls() {
  return (
    <div className="flex justify-between mt-6 px-2">
      <Button
        variant="outline"
        className="px-5 py-2 rounded-lg border-gray-300 hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-200 flex items-center gap-2"
      >
        <ArrowLeft size={18} />
        Previous
      </Button>

      <Button
        className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition-all duration-200 flex items-center gap-2"
      >
        Next
        <ArrowRight size={18} />
      </Button>
    </div>
  );
}

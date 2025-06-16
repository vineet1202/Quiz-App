import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

interface QuizResultProps {
  score: number;
  total: number;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, total }) => {
  const navigate = useNavigate();
  const percentage = (score / total) * 100;

  const getMessage = () => {
    if (percentage === 100) return "🏆 Perfect Score! Amazing!";
    if (percentage >= 75) return "🎉 Great job!";
    if (percentage >= 50) return "👍 Good effort!";
    return "🧠 Keep practicing!";
  };

  return (
    <Card className="text-center max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-2">Your Result</h2>
      <p className="text-4xl font-semibold text-blue-600">
        {score} / {total}
      </p>
      <p className="mt-2 text-lg text-gray-700">{getMessage()}</p>

      <Button className="mt-6" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </Card>
  );
};

export default QuizResult;

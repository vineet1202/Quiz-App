import React from "react";
import { Quiz } from "../../types/quiz";

export interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-200 cursor-pointer">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{quiz.title}</h3>
      <p className="text-sm text-gray-500">Quiz ID: {quiz.id}</p>
    </div>
  );
};

export default QuizCard;

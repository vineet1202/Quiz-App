import React from "react";
import { Question } from "../../types/question";
import QuestionCard from "./QuestionCard";

interface QuestionListProps {
  questions: Question[];
  onDelete?: (id: number) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, onDelete }) => {
  if (questions.length === 0) {
    return <p className="text-center text-gray-500">No questions available.</p>;
  }

  return (
    <div className="grid gap-4">
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default QuestionList;

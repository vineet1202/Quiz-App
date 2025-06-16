import React from "react";
import { Question } from "../../types/question";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface QuestionCardProps {
  question: Question;
  onDelete?: (id: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onDelete }) => {
  return (
    <Card className="p-4">
      <h3 className="font-semibold text-gray-800 mb-2">
        {question.questionTitle}
      </h3>
      <ul className="mb-3 text-sm text-gray-700 list-disc list-inside space-y-1">
        <li>A. {question.option1}</li>
        <li>B. {question.option2}</li>
        <li>C. {question.option3}</li>
        <li>D. {question.option4}</li>
      </ul>
      <p className="text-sm mb-2">
        <strong>Answer:</strong>{" "}
        <span className="text-green-600">{question.rightAnswer}</span>
      </p>
      <p className="text-xs text-gray-500 mb-2">
        <strong>Category:</strong> {question.category} |{" "}
        <strong>Difficulty:</strong> {question.difficultyLevel}
      </p>
      {onDelete && (
        <Button variant="primary" onClick={() => onDelete(question.id)}>
          Delete
        </Button>
      )}
    </Card>
  );
};

export default QuestionCard;

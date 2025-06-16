import React from "react";
import { Question as QuestionDTO } from "../../types/question";
import Card from "../ui/Card";

interface QuestionCardProps {
  question: QuestionDTO;
  selectedResponse: string;
  onSelect: (option: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedResponse,
  onSelect,
}) => {
  const options: string[] = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];

  return (
    <Card className="p-4">
      <h2 className="font-semibold mb-4">{question.questionTitle}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="block cursor-pointer">
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedResponse === option}
              onChange={() => onSelect(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </Card>
  );
};

export default QuestionCard;

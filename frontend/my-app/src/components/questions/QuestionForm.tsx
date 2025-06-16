import React, { useState, useEffect } from "react";
import { Question } from "../../types/question";
import Input from "../ui/Input";
import Button from "../ui/Button";

interface QuestionFormProps {
  initialData?: Question;
  onSubmit: (data: Question) => void;
}

const defaultQuestion: Question = {
  id: 0,
  questionTitle: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  rightAnswer: "",
  difficultyLevel: "",
  category: "",
};

const QuestionForm: React.FC<QuestionFormProps> = ({
  initialData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Question>(
    initialData || defaultQuestion
  );

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        name="questionTitle"
        label="Question Title"
        value={formData.questionTitle}
        onChange={handleChange}
        required
      />
      <Input
        name="option1"
        label="Option 1"
        value={formData.option1}
        onChange={handleChange}
        required
      />
      <Input
        name="option2"
        label="Option 2"
        value={formData.option2}
        onChange={handleChange}
        required
      />
      <Input
        name="option3"
        label="Option 3"
        value={formData.option3}
        onChange={handleChange}
        required
      />
      <Input
        name="option4"
        label="Option 4"
        value={formData.option4}
        onChange={handleChange}
        required
      />
      <Input
        name="rightAnswer"
        label="Correct Answer"
        value={formData.rightAnswer}
        onChange={handleChange}
        required
      />
      <Input
        name="difficultyLevel"
        label="Difficulty Level"
        value={formData.difficultyLevel}
        onChange={handleChange}
        required
      />
      <Input
        name="category"
        label="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <Button type="submit">Save Question</Button>
    </form>
  );
};

export default QuestionForm;

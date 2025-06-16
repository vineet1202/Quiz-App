import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

interface QuizFormProps {
  onSubmit: (data: {
    title: string;
    category: string;
    noOfQues: number;
  }) => void;
  isSubmitting: boolean;
}

const QuizForm: React.FC<QuizFormProps> = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Java",
    noOfQues: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "noOfQues" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <div className="flex flex-col">
        <label htmlFor="category" className="mb-1 font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="HTML">HTML</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>
      </div>

      <Input
        label="Number of Questions"
        name="noOfQues"
        type="number"
        value={formData.noOfQues.toString()}
        onChange={handleChange}
      />

      <Button type="submit" disabled={isSubmitting}>
        Create Quiz
      </Button>
    </form>
  );
};

export default QuizForm;

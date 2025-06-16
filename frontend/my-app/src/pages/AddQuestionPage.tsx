import React, { useState } from "react";
import { Question } from "../types/question";
import { addQuestion } from "../services/questionService";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const initialState: Question = {
  id: 0,
  questionTitle: "",
  rightAnswer: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  difficultyLevel: "",
  category: "",
};

const categoryOptions = ["Java", "Python", "HTML"];
const difficultyOptions = ["Easy", "Medium", "Hard"];

const AddQuestionPage: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { id, ...questionData } = formData;
    try {
      await addQuestion(questionData);
      setMessage("Question added successfully!");
      setFormData(initialState);
    } catch (err) {
      setMessage("Error adding question.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 ">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Question</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Question"
            name="questionTitle"
            value={formData.questionTitle}
            onChange={handleChange}
          />
          <Input
            label="Correct Answer"
            name="rightAnswer"
            value={formData.rightAnswer}
            onChange={handleChange}
          />
          <Input
            label="Option 1"
            name="option1"
            value={formData.option1}
            onChange={handleChange}
          />
          <Input
            label="Option 2"
            name="option2"
            value={formData.option2}
            onChange={handleChange}
          />
          <Input
            label="Option 3"
            name="option3"
            value={formData.option3}
            onChange={handleChange}
          />
          <Input
            label="Option 4"
            name="option4"
            value={formData.option4}
            onChange={handleChange}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty Level
            </label>
            <select
              name="difficultyLevel"
              value={formData.difficultyLevel}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select difficulty</option>
              {difficultyOptions.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              list="category-options"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Type a category"
            />
            <datalist id="category-options">
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat} />
              ))}
            </datalist>
          </div>

          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Add Question
          </Button>
        </form>

        {message && <p className="mt-4 text-sm text-blue-600">{message}</p>}
      </Card>
    </div>
  );
};

export default AddQuestionPage;

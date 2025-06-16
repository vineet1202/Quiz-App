import { useEffect, useState } from "react";
import { getAllQuestions, deleteQuestion } from "../services/questionService";
import { Question } from "../types/question";
import QuestionCard from "../components/questions/QuestionCard";
import CategoryFilter from "../components/questions/CategoryFilter";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await getAllQuestions();
      setQuestions(response);
      setFilteredQuestions(response);
    } catch (err) {
      console.error("Error fetching questions", err);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredQuestions(questions);
    } else {
      setFilteredQuestions(
        questions.filter(
          (q) => q.category.toLowerCase() === category.toLowerCase()
        )
      );
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteQuestion(id);
      const updated = questions.filter((q) => q.id !== id);
      setQuestions(updated);
      if (selectedCategory === "All") {
        setFilteredQuestions(updated);
      } else {
        setFilteredQuestions(
          updated.filter(
            (q) => q.category.toLowerCase() === selectedCategory.toLowerCase()
          )
        );
      }
    } catch (err) {
      console.error("Failed to delete question", err);
    }
  };

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Questions</h2>
        <Button variant="primary" onClick={() => navigate("/questions/add")}>
          Add Question
        </Button>
      </div>

      <CategoryFilter
        selected={selectedCategory}
        onChange={handleCategoryChange}
      />

      <div className="grid gap-4 mt-4">
        {filteredQuestions.map((q) => (
          <QuestionCard key={q.id} question={q} onDelete={handleDelete} />
        ))}
        {filteredQuestions.length === 0 && (
          <p className="text-gray-500">No questions found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizForm from "../components/quiz/QuizForm";
import { createQuiz } from "../services/quizService";
import Loading from "../components/ui/Loading";

const CreateQuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleCreateQuiz = async (data: {
    title: string;
    category: string;
    noOfQues: number;
  }) => {
    setSubmitting(true);
    try {
      await createQuiz(data);
      alert("Quiz created successfully!");
      navigate("/quizzes");
    } catch (err) {
      console.error(err);
      alert("Failed to create quiz. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitting) return <Loading />;

  return (
    <div className="max-w-xl mx-auto py-8">
      <QuizForm onSubmit={handleCreateQuiz} isSubmitting={submitting} />
    </div>
  );
};

export default CreateQuizPage;

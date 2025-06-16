import { useState, useEffect } from "react";
import { Question } from "../types/question";
import { UserResponse } from "../types/response";
import { getQuizById as getQuiz, submitQuiz } from "../services/quizService";

export const useQuiz = (quizId: number) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuiz(quizId);
        setQuestions(data);
        setResponses(data.map((q) => ({ id: q.id, response: "" }))); // Init empty responses
      } catch (err) {
        setError("Failed to load quiz.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const updateResponse = (questionId: number, selectedOption: string) => {
    setResponses((prev) =>
      prev.map((r) =>
        r.id === questionId ? { ...r, response: selectedOption } : r
      )
    );
  };

  const submit = async () => {
    try {
      const result = await submitQuiz(quizId, responses);
      setScore(result);
    } catch (err) {
      setError("Failed to submit quiz.");
    }
  };

  return {
    questions,
    responses,
    updateResponse,
    submit,
    score,
    loading,
    error,
  };
};

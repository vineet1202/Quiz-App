import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizById, submitQuiz } from "../services/quizService";
import { Question as QuestionDTO } from "../types/question";
import { UserResponse as ResponsePayload } from "../types/response";
import QuestionCard from "../components/quiz/QuestionCard";
import Loading from "../components/ui/Loading";
import Button from "../components/ui/Button";

const TakeQuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<QuestionDTO[]>([]);
  const [responses, setResponses] = useState<ResponsePayload[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const responsesRef = useRef<ResponsePayload[]>([]);

  const submittingRef = useRef(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuizById(Number(id));
        setQuestions(data);
        setResponses(data.map((q) => ({ id: q.id, response: "" })));
      } catch (err) {
        alert("Failed to load quiz.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleOptionSelect = (questionId: number, selectedOption: string) => {
    setResponses((prev) =>
      prev.map((res) =>
        res.id === questionId ? { ...res, response: selectedOption } : res
      )
    );
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const score = await submitQuiz(Number(id), responses);
      navigate(`/quiz-result/${id}`, {
        state: { score, total: questions.length },
      });
    } catch (err) {
      alert("Failed to submit quiz.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || submitting) return <Loading />;

  console.log(responses);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Take Quiz</h1>
      <div className="space-y-6">
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            selectedResponse={
              responses.find((r) => r.id === question.id)?.response || ""
            }
            onSelect={(option) => handleOptionSelect(question.id, option)}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button onClick={handleSubmit} variant="primary">
          Submit Quiz
        </Button>
      </div>
    </div>
  );
};

export default TakeQuizPage;

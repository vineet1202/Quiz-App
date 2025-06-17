import React, { useEffect, useState } from "react";
import { getAllQuizzes } from "../services/quizService";
import { Quiz } from "../types/quiz";
import { Link } from "react-router-dom";
import QuizCard from "../components/quiz/QuizCard";
import Loading from "../components/ui/Loading";

const QuizListPage: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getAllQuizzes();
        setQuizzes(data);
      } catch (err) {
        console.error("Failed to fetch quizzes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Quizzes</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.length==0? (<span>No quizzes available</span>):(
          quizzes.map((quiz) => (
          <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
            <QuizCard quiz={quiz} />
          </Link>
        ))
        )}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {quizzes.length === 0 ? (
    <span className="col-span-full text-center text-gray-500">
      No quizzes available
    </span>
  ) : (
    quizzes.map((quiz) => (
      <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
        <QuizCard quiz={quiz} />
      </Link>
    ))
  )}
</div> 
    </div>
  );
};

export default QuizListPage;

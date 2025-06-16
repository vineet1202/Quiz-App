import { useLocation, useParams, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const QuizResultPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? null;
  const total = location.state?.total ?? 0;

  const handleBack = () => {
    navigate("/");
  };

  if (score === null) {
    return (
      <div className="flex justify-center mt-10">
        <Card className="p-6 max-w-lg w-full text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            No Results Found
          </h2>
          <p className="text-red-600 mb-4">Please take the quiz first.</p>
          <Button onClick={() => navigate(`/quiz/${id}`)} variant="primary">
            Take Quiz
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <Card className="p-6 max-w-lg w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Quiz Completed
        </h2>
        <p className="text-lg text-green-700 font-medium mb-4">
          Your Score: {score}/{total}
        </p>
        <Button onClick={handleBack} variant="primary">
          Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default QuizResultPage;

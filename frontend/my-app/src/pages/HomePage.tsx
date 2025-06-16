import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to the Quiz App
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        Test your knowledge or create your own quiz!
      </p>
      <div className="space-x-4">
        <Link to="/quizzes">
          <Button>Take a Quiz</Button>
        </Link>
        <Link to="/create-quiz">
          <Button variant="secondary">Create Quiz</Button>
        </Link>
        <Link to="/questions">
          <Button variant="outline">Manage Questions</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

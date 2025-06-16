import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Quiz App
        </Link>
        <nav className="space-x-4 text-sm md:text-base">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/quizzes" className="hover:underline">
            Quizzes
          </Link>
          <Link to="/questions" className="hover:underline">
            Questions
          </Link>
          <Link to="/create-quiz" className="hover:underline">
            Create Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

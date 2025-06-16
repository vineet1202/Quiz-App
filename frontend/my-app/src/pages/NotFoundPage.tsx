import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <Button variant="outline">Go to Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

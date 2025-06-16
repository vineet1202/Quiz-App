import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuizListPage from "./pages/QuizListPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import TakeQuizPage from "./pages/TakeQuizPage";
import QuizResultPage from "./pages/QuizResultPage";
import QuestionsPage from "./pages/QuestionsPage";
import AddQuestionPage from "./pages/AddQuestionPage";
import NotFoundPage from "./pages/NotFoundPage";

import Layout from "./components/layout/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quizzes" element={<QuizListPage />} />
        <Route path="/create-quiz" element={<CreateQuizPage />} />
        <Route path="/quiz/:id" element={<TakeQuizPage />} />
        {/* <Route path="/quiz/:id/result" element={<QuizResultPage />} /> */}
        <Route path="/quiz-result/:id" element={<QuizResultPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/questions/add" element={<AddQuestionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;

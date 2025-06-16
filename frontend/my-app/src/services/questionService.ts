import api from "./api";
import { Question } from "../types/question";

const BASE_URL = "/question";

export const getAllQuestions = async (): Promise<Question[]> => {
  const res = await api.get(`${BASE_URL}/allQuestions`);
  return res.data;
};

export const getQuestionsByCategory = async (
  category: string
): Promise<Question[]> => {
  const res = await api.get(`${BASE_URL}/category/${category}`);
  return res.data;
};

export const addQuestion = async (
  question: Omit<Question, "id">
): Promise<string> => {
  const res = await api.post(`${BASE_URL}/add`, question);
  return res.data;
};

export const deleteQuestion = async (id: number): Promise<string> => {
  const res = await api.delete(`${BASE_URL}/delete/${id}`);
  return res.data;
};

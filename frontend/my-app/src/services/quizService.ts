import api from "./api";
import { Quiz } from "../types/quiz";
import { CreateQuizPayload } from "../types/createQuizPayload";
import { Question } from "../types/question";
import { UserResponse } from "../types/response";

const BASE_URL = "/quiz";

export const createQuiz = async (
  payload: CreateQuizPayload
): Promise<string> => {
  const { category, noOfQues, title } = payload;
  const res = await api.post(`${BASE_URL}/create`, null, {
    params: { category, noOfQues, title },
  });
  return res.data;
};

export const getQuizById = async (id: number): Promise<Question[]> => {
  const res = await api.get(`${BASE_URL}/get/${id}`);
  return res.data;
};

let isSubmitting = false;
export const submitQuiz = async (
  id: number,
  responses: UserResponse[]
): Promise<number> => {
  if (isSubmitting) {
    console.log("Already submitting, ignoring duplicate request");
    return Promise.reject("Submission in progress");
  }

  isSubmitting = true;
  console.log("responses --> ", responses);

  try {
    const res = await api.post(`${BASE_URL}/submit/${id}`, responses);
    return res.data;
  } finally {
    isSubmitting = false;
  }
};

export const getAllQuizzes = async (): Promise<Quiz[]> => {
  const res = await api.get("/quiz/all");
  return res.data;
};

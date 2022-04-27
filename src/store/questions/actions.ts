import { action } from "typesafe-actions";
import { IQuestionsActionType, Question } from "./types";

export const getQuestionsRequest = () =>
    action(IQuestionsActionType.GET_QUESTIONS_REQUEST);
export const getQuestionsSuccess = (data: any) =>
    action(IQuestionsActionType.GET_QUESTIONS_SUCCESS, data);
export const getQuestionsError = (error: any) =>
    action(IQuestionsActionType.GET_QUESTIONS_ERROR, error);

export const toggleQuestionStatus = (questionId: string) =>
    action(IQuestionsActionType.TOGGLE_QUESTION_STATUS, questionId);

export const loadQuestions = (questions: Question[]) =>
    action(IQuestionsActionType.LOAD_QUESTIONS, questions);

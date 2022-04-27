export enum IQuestionsActionType {
    GET_QUESTIONS_REQUEST = "@@questions/GET_QUESTIONS_REQUEST",
    GET_QUESTIONS_SUCCESS = "@@questions/GET_QUESTIONS_SUCCESS",
    GET_QUESTIONS_ERROR = "@@questions/GET_QUESTIONS_ERROR",

    TOGGLE_QUESTION_STATUS = "@@questions/TOGGLE_QUESTION_STATUS",

    LOAD_QUESTIONS = "@@questions/LOAD_QUESTIONS"
}

export interface Question {
    id: string;
    name: string;
    category: string;
    isActive: boolean;
}

export interface IQuestionsState {
    questions: Question[];
}

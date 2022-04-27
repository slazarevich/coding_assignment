import { Reducer } from "redux";
import { IQuestionsActionType, IQuestionsState } from "./types";

import DATA from "../../DATA";
import { setDataToLocalStorage } from "../utils";

export const initialState: IQuestionsState = {
    questions: []
};

const addStatusToQuestions = (data: any[]) => {
    return data.map((q) => ({ ...q, isActive: false }));
};

const reducer: Reducer<IQuestionsState> = (
    state = initialState,
    action
): IQuestionsState => {
    switch (action.type) {
        case IQuestionsActionType.GET_QUESTIONS_REQUEST: {
            return {
                ...initialState
            };
        }
        case IQuestionsActionType.GET_QUESTIONS_SUCCESS: {
            const questions = addStatusToQuestions(DATA);

            setDataToLocalStorage("questions", questions);

            return {
                ...state,
                questions: questions
            };
        }
        case IQuestionsActionType.GET_QUESTIONS_ERROR: {
            return {
                ...state
            };
        }
        case IQuestionsActionType.TOGGLE_QUESTION_STATUS: {
            const questionId = action.payload;
            const questions = [...state.questions];

            questions.forEach((q) => {
                if (q.id === questionId) {
                    q.isActive = !q.isActive;
                }
            });

            setDataToLocalStorage("questions", questions);

            return {
                ...state,
                questions: questions
            };
        }
        case IQuestionsActionType.LOAD_QUESTIONS: {
            const questions = action.payload;
            return {
                ...state,
                questions: questions
            };
        }
        default: {
            return state;
        }
    }
};

export { reducer as questionsReducer };

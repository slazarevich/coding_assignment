import { combineReducers } from "redux";
import { questionsReducer } from "./questions/reducer";
import { IQuestionsState } from "./questions/types";
import { all, fork } from "redux-saga/effects";
import questionsSaga from "./questions/sagas";

// The top-level state object
export interface ApplicationState {
    questions: IQuestionsState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = () =>
    combineReducers({
        questions: questionsReducer
    });

export function* rootSaga() {
    yield all([fork(questionsSaga)]);
}

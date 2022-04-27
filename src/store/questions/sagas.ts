import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import { getQuestionsError, getQuestionsSuccess } from "./actions";
import { IQuestionsActionType } from "./types";
import axios from "axios";
import DATA from "../../DATA";

function* handleQuestionsRequest(action: any): any {
    const userData = action.payload;
    const url = "https://www.algoexpert.io/api/fe/questions";

    try {
        // const res = yield call(axios.get, url);
        const res = { data: DATA, error: null };
        if (res.error) {
            yield put(getQuestionsError(res.error));
        } else {
            yield put(getQuestionsSuccess(res.data));
        }
    } catch (error) {
        if (error instanceof Error) {
            yield put(getQuestionsError(error.stack!));
        } else {
            yield put(getQuestionsError("An unknown error occurred."));
        }
    }
}

function* watchQuestionsRequest() {
    yield takeLatest(
        IQuestionsActionType.GET_QUESTIONS_REQUEST,
        handleQuestionsRequest
    );
}

function* questionsSaga() {
    yield all([fork(watchQuestionsRequest)]);
}

export default questionsSaga;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Column from "./UI/Column";
import {
    getQuestionsRequest,
    loadQuestions,
    toggleQuestionStatus
} from "./store/questions/actions";
import { ApplicationState } from "./store";
import { Question } from "./store/questions/types";
import ProgressBar from "./UI/ProgressBar";
import { getDataFromLocalStorage } from "./store/utils";

const getQuestionsByCategory = (questions: Question[]) => {
    const questionsByCategory = {};
    const categories = [...new Set(questions.map((q) => q.category))];

    categories.forEach((category) => {
        // @ts-ignore
        questionsByCategory[category] = questions.filter(
            (q) => q.category === category
        );
    });

    return questionsByCategory;
};

const getProgressBarState = (questions: Question[]) => {
    const activeCount = questions.filter((q) => q.isActive).length;
    const totalCount = questions.length;

    return Math.round((activeCount / totalCount) * 100);
};

const RootLayout: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector<ApplicationState, Question[]>(
        (store) => store.questions.questions
    );

    useEffect(() => {
        handleGetData();
    }, []);

    const handleGetData = () => {
        const data = getDataFromLocalStorage("questions");
        if (data) {
            return dispatch(loadQuestions(data));
        }
        return dispatch(getQuestionsRequest());
    };

    const handleColumnItemClick = (questionId: string) => {
        dispatch(toggleQuestionStatus(questionId));
    };

    const questionsByCategory = getQuestionsByCategory(data);
    const proggressBarState = getProgressBarState(data);

    return (
        <>
            <ProgressBar now={proggressBarState} />
            <Columns>
                {Object.keys(questionsByCategory).map((key) => (
                    <Column
                        key={key}
                        title={key}
                        // @ts-ignore
                        items={questionsByCategory[key]}
                        handleColumnItemClick={handleColumnItemClick}
                    />
                ))}
            </Columns>
        </>
    );
};

const Columns = styled.div`
    display: flex;
    justify-content: center;
`;

export default RootLayout;

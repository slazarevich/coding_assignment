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
import Button from "./UI/Button";

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

const RootLayout: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector<ApplicationState, Question[]>(
        (store) => store.questions.questions
    );

    useEffect(() => {
        handleGetData();
        // eslint-disable-next-line
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

    const activeCount = data.filter((q) => q.isActive).length;
    const totalCount = data.length;
    const proggressBarState = Math.round((activeCount / totalCount) * 100);
    const questionsByCategory = getQuestionsByCategory(data);

    return (
        <Wrapper>
            <Header>
                <Title>{`${activeCount} Questions Completed out of ${totalCount}`}</Title>
                <ProgressBarWrapper>
                    <ProgressBar now={proggressBarState} />
                </ProgressBarWrapper>
                <Buttons>
                    <Button
                        title={"FrontendExpert Certificate"}
                        onClick={() => {}}
                    />
                    <Button title={"Recruiting Profile"} onClick={() => {}} />
                </Buttons>
                <Buttons>
                    <Button
                        title={"Group by Category"}
                        onClick={() => {}}
                        isLight
                    />
                    <Button
                        title={"Group by Randomly"}
                        onClick={() => {}}
                        isLight
                    />
                </Buttons>
            </Header>
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
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(0.5turn, #ffffff, #d6d6d6);
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

const ProgressBarWrapper = styled.div`
    width: 485px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`;

const Columns = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`;

const Buttons = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 10px;
`;

export default RootLayout;

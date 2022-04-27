import React from "react";
import styled from "styled-components";
import { Question } from "../store/questions/types";

interface ColumnItemProps {
    itemData: Question;
    handleColumnItemClick: (questionId: string) => void;
}

const ColumnItem: React.FC<ColumnItemProps> = ({
    itemData,
    handleColumnItemClick
}) => {
    const { id, name, isActive } = itemData;

    return (
        <ColItemWrapper onClick={() => handleColumnItemClick(id)}>
            <ContentWrapper>
                <Status isActive={isActive} />
                <Text isActive={isActive}>{name}</Text>
            </ContentWrapper>
            <Strip />
        </ColItemWrapper>
    );
};

const ColItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 40px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px;
    cursor: pointer;
    padding-left: 10px;
    border-radius: 5px;

    &:hover {
        background-color: #f2f2f2;
    }
`;

const Status = styled("div")<{ isActive: boolean }>`
    width: 20px;
    height: 20px;
    border: 1px solid grey;
    border-radius: 50px;
    background-color: ${(props) => (props.isActive ? "#09d43c" : "grey")};
    box-shadow: inset rgb(0 0 0 / 20%) 0px -3px 2px 0px,
        rgb(0 0 0 / 20%) 0px 1px 2px 0px;
    margin-right: 10px;
`;

const Text = styled("div")<{ isActive: boolean }>`
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => (props.isActive ? "#02977e" : "black")};
`;

const Strip = styled.div`
    width: 30px;
    height: 100%;
    border-radius: 0 5px 5px 0;
    background-color: #029780;
    box-shadow: inset rgb(0 0 0 / 20%) -5px 0px 0px 0px;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default ColumnItem;

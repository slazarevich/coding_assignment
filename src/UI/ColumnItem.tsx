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
            <div>{name}</div>
            <Status isActive={isActive} />
        </ColItemWrapper>
    );
};

const ColItemWrapper = styled.div`
    display: flex;
`;

const Status = styled("div")<{ isActive: boolean }>`
    width: 10px;
    height: 10px;
    background-color: ${(props) => (props.isActive ? "green" : "grey")};
`;

export default ColumnItem;

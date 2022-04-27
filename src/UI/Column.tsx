import { Question } from "../store/questions/types";
import styled from "styled-components";
import ColumnItem from "./ColumnItem";

interface ColumnProps {
    title: string;
    items: Question[];
    handleColumnItemClick: (question: string) => void;
}

const Column: React.FC<ColumnProps> = ({
    title,
    items,
    handleColumnItemClick
}) => {
    const activeCount = items.filter((q) => q.isActive).length;
    const totalCount = items.length;

    return (
        <div>
            <Title>
                {title} {` - ${activeCount}/${totalCount}`}
            </Title>
            <ColumnWrapper>
                {items.map((item) => {
                    return (
                        <ColumnItem
                            key={item.id}
                            itemData={item}
                            handleColumnItemClick={handleColumnItemClick}
                        />
                    );
                })}
            </ColumnWrapper>
        </div>
    );
};

const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export default Column;

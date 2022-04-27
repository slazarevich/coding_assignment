import { Question } from "../store/questions/types";
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
            <h2>
                {title} {`${activeCount}/${totalCount}`}
            </h2>
            {items.map((item) => {
                return (
                    <ColumnItem
                        key={item.id}
                        itemData={item}
                        handleColumnItemClick={handleColumnItemClick}
                    />
                );
            })}
        </div>
    );
};

export default Column;

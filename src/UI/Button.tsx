import styled from "styled-components";

interface ButtonProps {
    title: string;
    onClick: () => void;
    isLight?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, isLight = false }) => {
    return (
        <Btn onClick={onClick} isLight={isLight}>
            {title}
        </Btn>
    );
};

const Btn = styled("div")<{ isLight: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: ${(props) => (props.isLight ? "#ffffff" : "#029780")};
    border-radius: 5px;
    padding: 5px;
    color: ${(props) => (props.isLight ? "#029780" : "white")};
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px,
        inset rgb(0 0 0 / 20%) 0px -1px 2px 0px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    width: 200px;

    &:hover {
        -webkit-filter: brightness(95%);
    }
`;

export default Button;

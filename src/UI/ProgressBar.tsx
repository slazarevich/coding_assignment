import styled from "styled-components";

interface ProgressBarProps {
    now: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ now }) => {
    return (
        <Container>
            <Filler now={now}>
                <Label>{`${now}%`}</Label>
            </Filler>
        </Container>
    );
};

const Container = styled.div`
    height: 20;
    width: 100%;
    background-color: "#e0e0de";
    border-radius: 50;
    margin: 50;
`;

const Filler = styled("div")<{ now: number }>`
    height: 100%;
    width: ${(props) => props.now}%;
    background-color: green;
    border-radius: inherit;
    text-align: right;
    transition: width 0.2s ease-in-out;
`;

const Label = styled.span`
    padding: 5;
    color: white;
    fontweight: bold;
`;

export default ProgressBar;

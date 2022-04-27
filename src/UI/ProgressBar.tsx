import styled from "styled-components";

interface ProgressBarProps {
    now: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ now }) => {
    return (
        <Container>
            <Filler now={now} />
            <Label>{`${now}%`}</Label>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: 25px;
    background-color: #e0e0de;
    border-radius: 5px;
`;

const Filler = styled("div")<{ now: number }>`
    position: absolute;
    height: 100%;
    width: ${(props) => props.now}%;
    background-color: #02203c;
    border-radius: inherit;
    transition: width 0.2s ease-in-out;
`;

const Label = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 50px;
    height: 25px;
    color: white;
    mix-blend-mode: difference;
`;

export default ProgressBar;

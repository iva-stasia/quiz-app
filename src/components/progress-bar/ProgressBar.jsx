import { useNavigate } from "react-router-dom";
import { BackButton, Container, CurrentStep, Nav, ProgressContainer, ProgressPointer } from "./ProgressBar.styled";

const ProgressBar = ({ quizStep }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (quizStep == 1) return;

    navigate(`/quiz/${quizStep - 1}`);
  };

  return (
    <Container>
      <Nav>
        <BackButton onClick={handleClick} disabled={quizStep == 1} />
        <div>
          <CurrentStep>{quizStep}</CurrentStep>/5
        </div>
      </Nav>
      <ProgressContainer>
        <ProgressPointer quizStep={quizStep} />
      </ProgressContainer>
    </Container>
  );
};

export default ProgressBar;

import { useParams } from "react-router-dom";

import ProgressBar from "../../components/progress-bar/ProgressBar";
import FirstStep from "../../containers/first-step/FirstStep";
import { Container, StepContainer } from "./Quiz.styled";
import SecondStep from "../../containers/second-step/SecondStep";
import ThirdStep from "../../containers/third-step/ThirdStep";
import FourthStep from "../../containers/fourth-step/FourthStep";
import FifthStep from "../../containers/fifth-step/FifthStep";

const steps = [
  <FirstStep key={0} />,
  <SecondStep key={1} />,
  <ThirdStep key={2} />,
  <FourthStep key={3} />,
  <FifthStep key={4} />,
];

const Quiz = () => {
  const { question } = useParams();

  return (
    <Container>
      <ProgressBar quizStep={question} />
      <StepContainer question={question}>{steps[question - 1]}</StepContainer>
    </Container>
  );
};

export default Quiz;

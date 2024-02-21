import styled from "@emotion/styled";
import { QUESTION_COUNT } from "../../constants/common";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StepContainer = styled.div`
  flex: 1;
  padding-inline: ${(props) => (props.question == QUESTION_COUNT ? "0px" : "20px")};
  display: flex;
  flex-direction: column;
`;

export { Container, StepContainer };

import styled from "@emotion/styled";
import { QUESTION_COUNT } from "../../constants/common";

const Container = styled.div`
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-size: 20px;
  font-weight: 800;
`;

const CurrentStep = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;

const ProgressContainer = styled.div`
  height: 4px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-radius: 2px;
`;

const ProgressPointer = styled.div`
  height: 4px;
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 2px;
  transform-origin: left;
  transform: scaleX(${({ quizStep }) => `${(quizStep * 100) / QUESTION_COUNT}%`});
  transition: transform 0.5s ease;
`;

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
`;

const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;

  &:disabled {
    opacity: 0;
  }
`;

export { Container, CurrentStep, ProgressContainer, ProgressPointer, BackButton, Nav };

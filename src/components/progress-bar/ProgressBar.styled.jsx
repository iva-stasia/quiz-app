import styled from "@emotion/styled";
import { QUESTION_COUNT } from "../../constants/common";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";

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
  width: ${(props) => `${(props.quizStep * 100) / QUESTION_COUNT}%`};
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 2px;
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

  &::before {
    content: url(${arrowLeftIcon});
    display: inline-block;
    width: 9px;
    height: 13px;
    transition: opacity 150ms ease-in-out;
  }

  &:disabled::before {
    opacity: 0;
  }
`;

export { Container, CurrentStep, ProgressContainer, ProgressPointer, BackButton, Nav };

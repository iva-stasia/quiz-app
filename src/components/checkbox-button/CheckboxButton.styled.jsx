import styled from "@emotion/styled";
import { css } from "@emotion/react";

import tickIcon from "../../assets/icons/tick.svg";
import { scalePulse } from "../../utils/animations";

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 26px 20px;
  cursor: pointer;
  font-size: 17px;
  background-color: ${({ theme, isChecked, isStepConfirm }) =>
    isChecked ? `${theme.colors.accent}20` : isStepConfirm ? `${theme.colors.optionBg}60` : theme.colors.optionBg};
  border: 2px solid;
  border-color: ${({ theme, isChecked, isStepConfirm }) =>
    isChecked ? theme.colors.accent : isStepConfirm ? `${theme.colors.optionBg}60` : theme.colors.optionBg};
  border-radius: 16px;
  transition: all 0.15s ease-in-out;
  animation: ${({ isChecked, isStepConfirm }) =>
    isChecked && isStepConfirm
      ? css`
          ${scalePulse} 0.5s ease-in-out 2
        `
      : ""};
`;

const Checkbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxIndicator = styled.div`
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme, isChecked, isStepConfirm }) =>
    isChecked ? theme.colors.accent : isStepConfirm ? "#6d437660" : "#6d4376"};
  border: 1px solid ${({ theme, isStepConfirm }) => (isStepConfirm ? `${theme.colors.accent}40` : theme.colors.accent)};
  transition: all 150ms ease-in-out;

  &::before {
    content: url(${tickIcon});
    display: "block";
    opacity: ${({ isChecked }) => (isChecked ? "1" : "0")};
    transition: opacity 150ms ease-in-out;
  }
`;

export { Label, Checkbox, CheckboxIndicator };

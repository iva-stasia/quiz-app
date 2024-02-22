import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { scalePulse } from "../../utils/animations";

const Button = styled.button`
  flex: ${({ withIcon }) => (withIcon ? "1 1 33.33%" : "0 1 auto")};
  display: flex;
  flex-direction: ${({ withIcon }) => (withIcon ? "column" : "row")};
  align-items: center;
  justify-content: ${({ withIcon }) => (withIcon ? "center" : "flex-start")};
  gap: 10px;
  padding: 26px 20px;
  text-align: ${({ withIcon }) => (withIcon ? "center" : "left")};
  font-size: 17px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: ${({ withIcon }) => (withIcon ? "12px" : "16px")};
  transition: background-color 0.15s ease-in-out;
  animation: ${({ clicked }) =>
    clicked
      ? css`
          ${scalePulse} 0.5s ease-in-out 2
        `
      : ""};

  &:disabled {
    background-color: ${({ clicked, theme }) => !clicked && theme.colors.optionBg}60;
    cursor: auto;
  }
`;

export { Button };

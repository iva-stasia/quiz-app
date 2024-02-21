import styled from "@emotion/styled";

const Button = styled.button`
  padding: 16px 20px;
  width: 100%;
  font-size: 17px;
  font-weight: 800;
  border-radius: 30px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.accent};
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent}90;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.accent}40;
    cursor: auto;
  }
`;

export { Button };

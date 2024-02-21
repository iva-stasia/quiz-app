import styled from "@emotion/styled";

const InputContainer = styled.div`
  width: 100%;
  // padding-bottom: ${({ error }) => (error ? "0" : "32px")};
`;

const Input = styled.input`
  padding: 26px 20px;
  width: 100%;
  font-size: 17px;
  border-radius: 16px;
  border: 2px solid;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.optionBg};
  border-color: ${({ theme, error }) => (error ? theme.colors.errorColor : theme.colors.optionBg)};
  transition: all 150ms ease-in-out;

  &:hover {
    border-color: ${({ theme, error }) => (error ? theme.colors.errorColor : theme.colors.accent)};
  }

  &:focus-visible {
    border-color: ${({ theme, error }) => (error ? theme.colors.errorColor : theme.colors.accent)};
  }
`;

const InputError = styled.p`
  height: 32px;
  padding: 8px 20px;
  width: 100%;
  font-size: 12px;
  color: ${(props) => props.theme.colors.errorColor};
`;

export { InputContainer, Input, InputError };

import styled from "@emotion/styled";

const Label = styled.label`
  margin-left: ${({ index }) => (index === 0 || index === 4 ? "20px" : "0")};
  margin-right: ${({ index }) => (index === 3 ? "20px" : "0")};
  margin-top: ${({ index }) =>
    (index + 1) % 2 === 0 && index < 4 ? "20px" : index % 2 === 0 && index >= 4 ? "-20px" : "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
  padding: 8px;
  width: 88px;
  height: 88px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  background-color: ${({ theme, isChecked }) => (isChecked ? `${theme.colors.accent}20` : theme.colors.optionBg)};
  border: 2px solid;
  border-color: ${({ theme, isChecked }) => (isChecked ? theme.colors.accent : theme.colors.optionBg)};
  border-radius: 50%;

  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }
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

const OptionText = styled.span`
  text-align: center;
`;

export { Label, Checkbox, OptionText };

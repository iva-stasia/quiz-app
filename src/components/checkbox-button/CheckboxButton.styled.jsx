import styled from "@emotion/styled";
import tickIcon from "../../assets/icons/tick.svg";

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 26px 20px;
  cursor: pointer;
  font-size: 17px;
  background-color: ${({ theme, isChecked }) => (isChecked ? `${theme.colors.accent}20` : theme.colors.optionBg)};
  border: 2px solid;
  border-color: ${({ theme, isChecked }) => (isChecked ? theme.colors.accent : theme.colors.optionBg)};
  border-radius: 16px;
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
  background-color: ${({ theme, isChecked }) => (isChecked ? theme.colors.accent : "#6d4376")};
  border: 1px solid ${(props) => props.theme.colors.accent};
  transition: all 150ms ease-in-out;

  &::before {
    content: url(${tickIcon});
    display: "block";
    opacity: ${({ isChecked }) => (isChecked ? "1" : "0")};
    transition: opacity 150ms ease-in-out;
  }
`;

export { Label, Checkbox, CheckboxIndicator };

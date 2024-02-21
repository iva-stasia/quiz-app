import CheckboxButton from "../checkbox-button/CheckboxButton";
import OptionButton from "../option-button/OptionButton";
import { Container } from "./OptionList.styled";

const OptionList = ({ options, onClick, row, multiselect, checked }) => {
  return (
    <Container row={row}>
      {multiselect
        ? options.map((option) => {
            const isChecked = checked.some((text) => text === option.text);

            return <CheckboxButton key={option.text} option={option} onClick={onClick} isChecked={isChecked} />;
          })
        : options.map((option) => (
            <OptionButton key={option.text} onClick={() => onClick(option)} withIcon={option.icon} option={option} />
          ))}
    </Container>
  );
};

export default OptionList;

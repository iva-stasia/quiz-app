import { useState } from "react";
import CheckboxButton from "../checkbox-button/CheckboxButton";
import OptionButton from "../option-button/OptionButton";
import { Container } from "./OptionList.styled";

const OptionList = ({ options, onClick, row, multiselect, checked, isStepConfirm }) => {
  const [disabled, setDisabled] = useState(false);

  const handleOnClick = (option) => {
    setDisabled(true);
    onClick(option);
  };

  return (
    <Container row={row}>
      {multiselect
        ? options.map((option) => {
            const isChecked = checked.some((text) => text === option.text);

            return (
              <CheckboxButton
                key={option.text}
                option={option}
                onChange={onClick}
                isChecked={isChecked}
                isStepConfirm={isStepConfirm}
              />
            );
          })
        : options.map((option) => (
            <OptionButton
              key={option.text}
              onClick={handleOnClick}
              withIcon={option.icon}
              option={option}
              disabled={disabled}
            />
          ))}
    </Container>
  );
};

export default OptionList;

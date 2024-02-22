import { useState } from "react";
import { Button } from "./OptionButton.styled";

const OptionButton = ({ option, onClick, withIcon, disabled }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick(option);
  };

  return (
    <Button withIcon={withIcon} onClick={handleClick} clicked={clicked} disabled={disabled}>
      {option.icon && <img alt={option.text} src={option.icon} />}
      <span>{option.text}</span>
    </Button>
  );
};

export default OptionButton;

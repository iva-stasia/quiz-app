import { Button } from "./OptionButton.styled";

const OptionButton = ({ option, onClick, withIcon }) => {
  return (
    <Button withIcon={withIcon} onClick={onClick}>
      {option.icon && <img alt={option.text} src={option.icon} />}
      <span>{option.text}</span>
    </Button>
  );
};

export default OptionButton;

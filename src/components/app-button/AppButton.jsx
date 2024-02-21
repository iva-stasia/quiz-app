import { Button } from "./AppButton.styled";

const AppButton = ({ title, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled} type="button">
      {title}
    </Button>
  );
};

export default AppButton;

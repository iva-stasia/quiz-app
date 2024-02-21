import { Checkbox, CheckboxIndicator, Label } from "./CheckboxButton.styled";

const CheckboxButton = ({ option, onClick, isChecked }) => {
  return (
    <div>
      <Label isChecked={isChecked}>
        <span>{option.text}</span>
        <Checkbox
          checked={isChecked}
          type="checkbox"
          onChange={() => {
            onClick(option);
          }}
        />
        <CheckboxIndicator isChecked={isChecked} />
      </Label>
    </div>
  );
};

export default CheckboxButton;

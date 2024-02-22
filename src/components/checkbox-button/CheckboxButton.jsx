import { Checkbox, CheckboxIndicator, Label } from "./CheckboxButton.styled";

const CheckboxButton = ({ option, onChange, isChecked, isStepConfirm }) => {
  return (
    <div>
      <Label isChecked={isChecked} isStepConfirm={isStepConfirm}>
        <span>{option.text}</span>
        <Checkbox
          checked={isChecked}
          type="checkbox"
          onChange={() => {
            onChange(option);
          }}
        />
        <CheckboxIndicator isChecked={isChecked} isStepConfirm={isStepConfirm} />
      </Label>
    </div>
  );
};

export default CheckboxButton;

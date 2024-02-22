import { Checkbox, CheckboxIndicator, Label, Icon } from "./CheckboxButton.styled";
import tickIcon from "../../assets/icons/tick.svg";

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
        <CheckboxIndicator isChecked={isChecked} isStepConfirm={isStepConfirm}>
          <Icon src={tickIcon} alt="Icon" isChecked={isChecked} />
        </CheckboxIndicator>
      </Label>
    </div>
  );
};

export default CheckboxButton;

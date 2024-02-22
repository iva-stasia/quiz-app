import { Checkbox, Label, OptionText } from "./BubbleButton.styled";

const BubbleButton = ({ option, onClick, index, isChecked, isStepConfirm }) => {
  return (
    <div>
      <Label isChecked={isChecked} index={index} isStepConfirm={isStepConfirm}>
        <img alt={option.text} src={option.icon} />
        <OptionText>{option.text}</OptionText>
        <Checkbox
          checked={isChecked}
          type="checkbox"
          onChange={() => {
            onClick(option);
          }}
        />
      </Label>
    </div>
  );
};

export default BubbleButton;

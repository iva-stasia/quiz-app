import BubbleButton from "../bubble-button/BubbleButton";
import { BubblesContainer, Container } from "./BubbleList.styled";

const BubbleList = ({ options, onClick, checked, isStepConfirm }) => {
  return (
    <Container>
      <BubblesContainer>
        {options.map((option, index) => {
          const isChecked = checked.some((text) => text === option.text);

          return (
            <BubbleButton
              index={index}
              key={option.text}
              option={option}
              onClick={onClick}
              isChecked={isChecked}
              isStepConfirm={isStepConfirm}
            />
          );
        })}
      </BubblesContainer>
    </Container>
  );
};

export default BubbleList;

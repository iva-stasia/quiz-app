import BubbleButton from "../bubble-button/BubbleButton";
import { BubblesContainer, Container } from "./BubbleList.styled";

const BubbleList = ({ options, onClick, checked }) => {
  return (
    <Container>
      <BubblesContainer>
        {options.map((option, index) => {
          const isChecked = checked.some((text) => text === option.text);

          return (
            <BubbleButton index={index} key={option.text} option={option} onClick={onClick} isChecked={isChecked} />
          );
        })}
      </BubblesContainer>
    </Container>
  );
};

export default BubbleList;

import { CircleContainer, Container, Description, Percentage } from "./Loader.styled";

const Loader = ({ percentage, description }) => {
  return (
    <Container>
      <CircleContainer>
        <svg width={255} height={255} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="47.5" fill="transparent" stroke="#E8EAF2" strokeWidth="4.5" />
          <circle
            cx="50"
            cy="50"
            r="47.5"
            fill="transparent"
            stroke="#E4229C"
            strokeWidth="4.5"
            strokeDasharray={300}
            strokeLinecap="round"
            strokeDashoffset={300 - (300 / 100) * percentage}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <Percentage>{percentage}%</Percentage>
      </CircleContainer>
      <Description>{description}</Description>
    </Container>
  );
};

export default Loader;

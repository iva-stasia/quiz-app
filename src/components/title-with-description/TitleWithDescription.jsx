import { Container, Title, Description } from "./TitleWithDescription.styled";

const TitleWithDescription = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default TitleWithDescription;

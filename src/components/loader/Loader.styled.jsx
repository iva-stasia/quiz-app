import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const CircleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Percentage = styled.p`
  position: absolute;
  font-size: 52px;
  font-weight: 800;
`;

const Description = styled.p`
  max-width: 200px;
  font-weight: 600;
  text-align: center;
`;

export { Container, Percentage, CircleContainer, Description };

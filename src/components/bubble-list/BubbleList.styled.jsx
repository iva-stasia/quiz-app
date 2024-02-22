import styled from "@emotion/styled";

const Container = styled.div`
  overflow-x: auto;
  flex: 1;
  margin-top: 24px;
  padding-top: 6px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BubblesContainer = styled.div`
  width: 430px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 7px;

  @media (min-width: 600px) {
    width: 100%;
    align-content: center;
    justify-content: center;
  }
`;

export { Container, BubblesContainer };

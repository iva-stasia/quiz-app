import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Title = styled.p`
  padding-inline: 24px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colors.titleGrey};
`;

const Description = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.descriptionGrey};
`;

export { Container, Title, Description };

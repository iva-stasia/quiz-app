import styled from "@emotion/styled";

const Container = styled.div`
  padding-inline: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  flex: 1;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

const AgreementContainer = styled.div`
  max-width: 260px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  color: #b6b8c3;
`;

const LinkTitle = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;

export { Container, InnerContainer, AgreementContainer, LinkTitle };

import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 74px;
  padding-inline: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  color: ${(props) => props.theme.colors.titleGrey};
`;

const InnerContainer = styled.div`
  max-width: 260px;
  flex: 1;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
  text-align: center;
`;

const Title = styled.p`
  font-family: "Niconne", cursive;
  font-size: 36px;
  text-align: center;
`;

const DownloadButton = styled.div`
  font-size: 17px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export { Container, InnerContainer, Title, DownloadButton };

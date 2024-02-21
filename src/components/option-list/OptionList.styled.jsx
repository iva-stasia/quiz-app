import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
  margin-top: ${(props) => (props.row ? "44px" : "24px")};
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.row ? "space-between" : "flex-start")};
  align-items: ${(props) => (props.row ? "flex-start" : "stretch")};
  gap: 12px;
`;

export { Container };

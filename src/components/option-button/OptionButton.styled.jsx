import styled from "@emotion/styled";

const Button = styled.button`
  flex: ${(props) => (props.withIcon ? "1 1 33.33%" : "0 1 auto")};
  display: flex;
  flex-direction: ${(props) => (props.withIcon ? "column" : "row")};
  align-items: center;
  justify-content: ${(props) => (props.withIcon ? "center" : "flex-start")};
  gap: 10px;
  padding: 26px 20px;
  text-align: ${(props) => (props.withIcon ? "center" : "left")};
  font-size: 17px;
  background-color: ${(props) => props.theme.colors.optionBg};
  border-radius: ${(props) => (props.withIcon ? "12px" : "16px")};
`;

export { Button };

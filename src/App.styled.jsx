import { css } from "@emotion/react";
import styled from "@emotion/styled";

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100svh;
    display: flex;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: #ffffff;
    background: #1f002b;
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    width: 100%;
  }

  button,
  input {
    background: none;
    color: inherit;
    font-family: inherit;
    border: none;
    cursor: pointer;

    &:focus-visible {
      outline: none;
    }
  }

  a {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
  }
`;

const Container = styled.div`
  padding: 20px 0;
  max-width: 460px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    margin-top: 80px;
    max-height: 700px;
  }
`;

export { globalStyles, Container };

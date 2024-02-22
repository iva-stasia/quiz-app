import { ThemeProvider } from "@emotion/react";
import { Global } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import theme from "./theme";
import { globalStyles, Container } from "./App.styled";

const App = () => {
  const { question } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!question) navigate("/quiz/1");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default App;

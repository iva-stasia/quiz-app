import { ThemeProvider } from "@emotion/react";
import { Global } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import theme from "./theme";
import { globalStyles, Container } from "./App.styled";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/quiz/1");
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

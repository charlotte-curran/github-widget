import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme/Theme";
import { GlobalStyle } from "./Theme/GlobalStyle";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div>hello app</div>
    </ThemeProvider>
  );
};

export default App;

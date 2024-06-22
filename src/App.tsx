import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeeShopContextProvider } from "./contexts/CoffeeShopContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CoffeeShopContextProvider>
          <Router />
        </CoffeeShopContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

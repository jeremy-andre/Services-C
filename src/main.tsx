import ReactDOM from "react-dom";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./Global/theme.ts";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="light" />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

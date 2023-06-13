import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="light" />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

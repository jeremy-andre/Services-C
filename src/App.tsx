import { Routes, Route } from "react-router-dom";
import { Home, About, Products, Cart, NotFound } from "./Views";

import { NavBar, Footer } from "./Components";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <NavBar />
      <Flex flex="1" flexDirection="column" mt="4rem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;

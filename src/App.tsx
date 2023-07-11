import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Products, Cart, ItemDetail, NotFound } from "./Views";
import { NavBar, Footer } from "./Components";
import { Flex } from "@chakra-ui/react";

function App() {
  // Limitador de Footer ----->
  const location = useLocation();
  const isItemDetailPage = location.pathname.includes("/products");

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
            <Route
              path="/products/:category/:itemName"
              element={<ItemDetail />}
            />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
      {!isItemDetailPage && <Footer />}
    </Flex>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Home, About, NotFound } from "./Views";
import { NavBar, Footer } from "./Components";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <NavBar />
      <Flex flex="1" flexDirection="column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;

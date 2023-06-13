import { Routes, Route } from "react-router-dom";
import { Home, About, Services, Design, Build, Renew,  NotFound } from "./Views";
import { NavBar, Footer } from "./Components";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex minHeight="100vh" flexDirection="column" >
      <NavBar />
      <Flex flex="1" flexDirection="column" mt='4rem'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services">
            <Route index element={<Services />} />
            <Route path="design" element={<Design />} />
            <Route path="build" element={<Build />} />
            <Route path="renew" element={<Renew />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;

import { Flex } from "@chakra-ui/react";
import { Design, Services, Showcase } from "./Components";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Showcase />
      <Design />
      <Services />
    </Flex>
  );
};

export default Home;

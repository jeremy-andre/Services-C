import { Flex } from "@chakra-ui/react";
import { InitialHome, Services, Proyects } from "../Components";

const Home = () => {
  return (
    <Flex direction="column" justify="center">
      <InitialHome />
      <Services />
      <Proyects />
    </Flex>
  );
};

export default Home;

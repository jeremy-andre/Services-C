import { Flex } from "@chakra-ui/react";
import { InitialHome, Services } from "../Components";

const Home = () => {
  return (
    <Flex direction='column' justify='center'>
      <InitialHome />
      <Services />
    </Flex>
  );
};

export default Home;

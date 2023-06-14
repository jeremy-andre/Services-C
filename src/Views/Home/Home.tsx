import { Flex } from "@chakra-ui/react";
import { InitialHome, Services, Proyects, Design} from "../../Components";
const Home = () => {
  return (
    <Flex direction="column" align="center" >
      <InitialHome />
      <Design />
      <Proyects />
      <Services />
    </Flex>
  );
};

export default Home;

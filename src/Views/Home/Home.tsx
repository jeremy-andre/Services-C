import { Flex } from "@chakra-ui/react";
import { CategoriesHome, Services, Showcase } from "./Components";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Showcase />
      <CategoriesHome />
      {/* <Services /> */}
    </Flex>
  );
};

export default Home;

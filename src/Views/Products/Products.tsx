import { Flex } from "@chakra-ui/react";
import Filter from "./FilterProducts/Filter";
import BreadCrumps from "./BreadCrumps/BreadCrumps";

const Products = () => {
  return (
    <Flex
      my="2rem"
      // bg="green"
      w={{ base: "25rem", md: "45rem", lg: "55rem", xl: "80rem" }}
      direction="column"
    >
      <BreadCrumps as="red" />
      <Filter />
    </Flex>
  );
};

export default Products;

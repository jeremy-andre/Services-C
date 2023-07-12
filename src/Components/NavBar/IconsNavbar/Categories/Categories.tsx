import { Flex, Text } from "@chakra-ui/react";
import { CiGrid41 } from "../../../../Icons";
import { Link as RouterLink } from "react-router-dom";

type Props = {};

const Categories = (props: Props) => {
  return (
    <Flex
      gap="1rem"
      align="center"
      w="30%"
      display={{ base: "none", lg: "flex" }}
      as={RouterLink}
      to="/products"
    >
      <Text color="rgba(80, 130, 80, 1)">Categorías</Text>
      <CiGrid41 color="rgba(100, 130, 100, 1)" size="1.4rem" />
    </Flex>
  );
};

export default Categories;

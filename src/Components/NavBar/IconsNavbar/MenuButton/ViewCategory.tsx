import { Flex, Text } from "@chakra-ui/react";
import { BiCategoryAlt } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  onToggle: () => void;
};

const ViewCategory = ({ onToggle }: Props) => {
  return (
    <Flex
      display={{ base: "flex", lg: "none" }}
      as={RouterLink}
      to="/products"
      onClick={onToggle}
      align="center"
      justify="space-between"
      gap="1rem"
    >
      <Text color="rgba(100, 130, 100, 1)">Buscar por categoría</Text>
      <BiCategoryAlt color="rgba(100, 130, 100, 1)" size="1.2rem" />
    </Flex>
  );
};

export default ViewCategory;

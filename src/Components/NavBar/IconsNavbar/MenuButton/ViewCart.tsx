import { Flex, Text } from "@chakra-ui/react";
import { BsHandbag } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  onToggle: () => void;
};

const ViewCart = ({ onToggle }: Props) => {
  return (
    <Flex
      display={{ base: "flex", lg: "none" }}
      as={RouterLink}
      to="/cart"
      onClick={onToggle}
      align="center"
      justify="space-between"
      gap="1rem"
    >
      <Text color="rgba(100, 130, 100, 1)">Ver mi Carrito</Text>
      <BsHandbag color="rgba(100, 130, 100, 1)" size="1.2rem" />
    </Flex>
  );
};

export default ViewCart;

import { useState } from "react";
import { Collapse, Flex, useDisclosure, Text } from "@chakra-ui/react";
import { AiOutlineMenu } from "../../../../Icons";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "../SearchIcon/SearchIcon";
import ProductsOffert from "./ProductsOffert";
import { AiOutlineShoppingCart } from "../../../../Icons";

const MenuButtonExample = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex direction="column" display={{ base: "flex", lg: "none" }}>
      <Flex onClick={onToggle} color="#dedede" cursor="pointer">
        <AiOutlineMenu size="1.5rem" />
      </Flex>

      <Collapse in={isOpen}>
        <Flex
          direction="column"
          px={{ base: "1rem", lg: "3rem" }}
          py="1rem"
          color="white"
          mt="1.5rem"
          bg="rgba(30, 30, 30, 0.95)"
          shadow="md"
          position="absolute"
          left="0"
          right="0"
        >
          <SearchIcon />
          <ProductsOffert />
          <Flex as={RouterLink} to="/cart" align="center" gap="1rem">
            <Text>Ver mi Carrito</Text>
            <AiOutlineShoppingCart />
          </Flex>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default MenuButtonExample;

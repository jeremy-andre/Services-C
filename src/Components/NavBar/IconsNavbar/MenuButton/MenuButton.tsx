import { useState, useRef } from "react";
import {
  Collapse,
  Flex,
  useDisclosure,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { CiMenuBurger } from "../../../../Icons";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "../SearchIcon/SearchIcon";
import ProductsOffert from "./ProductsOffert";
import { AiOutlineShoppingCart, BiCategoryAlt } from "../../../../Icons";
import ProductsNew from "./ProductsNew";
import SearchBar from "../SearchIcon/SearchBar";

const MenuButton = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => {
      onClose();
    },
  });

  return (
    <Flex direction="column" display={{ base: "flex", lg: "flex" }} ref={ref}>
      <Flex onClick={onToggle} color="rgba(100, 130, 100, 1)" cursor="pointer">
        <CiMenuBurger size="1.4rem" />
      </Flex>

      <Collapse in={isOpen}>
        <Flex
          direction="column"
          px={{ base: "1rem", lg: "3rem" }}
          py="1rem"
          color="white"
          mt="1.5rem"
          bg="rgba(255, 255, 255, 1)"
          shadow="md"
          position="absolute"
          left="0"
          right="0"
        >
          {/* <SearchBar /> */}
          <ProductsOffert />
          <ProductsNew />
          <Flex
            as={RouterLink}
            to="/cart"
            onClick={onToggle}
            align="center"
            justify="space-between"
            gap="1rem"
            mb="1rem"
          >
            <Text color="rgba(100, 130, 100, 1)">Ver mi Carrito</Text>
            <AiOutlineShoppingCart size="1.2rem" />
          </Flex>
          <Flex
            as={RouterLink}
            to="/products"
            onClick={onToggle}
            align="center"
            justify="space-between"
            gap="1rem"
            mb="1rem"
          >
            <Text color="rgba(100, 130, 100, 1)">Buscar por categoría</Text>
            <BiCategoryAlt size="1.2rem" />
          </Flex>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default MenuButton;

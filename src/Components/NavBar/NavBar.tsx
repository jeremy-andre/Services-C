import {
  Flex,
  Box,
  Heading,
  useColorModeValue,
  Button,
  Text,
} from "@chakra-ui/react";
import { DarkModeButton } from "./DarkModeButton";
import MenuButton from "./IconsNavbar/MenuButton/MenuButton";
import { Link as RouterLink } from "react-router-dom";
import CartIcon from "./IconsNavbar/CartIcon/CartIcon";
import SearchIcon from "./IconsNavbar/SearchIcon/SearchIcon";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      position="fixed"
      w="100%"
      h="4rem"
      bg="rgba(30, 30, 30, 0.95)"
      zIndex="1"
      px={{ base: "1rem", lg: "3rem" }}
    >
      <Flex
        gap="2rem"
        align="center"
        w="40%"
        display={{ base: "none", lg: "flex" }}
      >
        <Text color="#dedede">Productos</Text>
        <Text color="#dedede">Nuevo</Text>
        <Text color="#dedede">Ofertas</Text>
      </Flex>
      <Heading as={RouterLink} to="/" size="md" color="#91e07b">
        Empresa Muebles
      </Heading>
      <Flex
        gap="2rem"
        align="center"
        w="40%"
        justify="end"
        display={{ base: "none", lg: "flex" }}
      >
        <SearchIcon />
        <CartIcon />
        {/* <DarkModeButton /> */}
      </Flex>
      <MenuButton />
    </Flex>
  );
};

export default NavBar;

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
import New from "./IconsNavbar/MenuFull/New";
import Offers from "./IconsNavbar/MenuFull/Offers";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      justify="center"
      position="fixed"
      w="100%"
      bg="rgba(30, 30, 30, 0.95)"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      px={{ base: "1rem", lg: "3rem" }}
      zIndex="5"
      h="4rem"
    >
      <Flex align="center" justify="space-between" w="100%" maxW="80rem">
        <Flex
          gap="2rem"
          align="center"
          w="40%"
          display={{ base: "none", lg: "flex" }}
        >
          <Text as={RouterLink} to="/products" color="#dedede">
            Categorías
          </Text>
          <New />
          <Offers />
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
    </Flex>
  );
};

export default NavBar;

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
import { CiGrid41 } from "react-icons/ci";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      justify="center"
      position="fixed"
      w="100%"
      bg="rgba(255, 255, 255, 1)"
      // boxShadow="0px 4px 8px rgba(0, 0, 0, 0.015)"
      px={{ base: "1rem", lg: "3rem" }}
      zIndex="5"
      h="4rem"
    >
      <Flex align="center" justify="space-between" w="100%" maxW="80rem">
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
          {/* <New />
          <Offers /> */}
        </Flex>
        <Text
          as={RouterLink}
          to="/"
          fontSize="1.3rem"
          color="rgba(100, 130, 100, 1)"
        >
          Empresa Muebles
        </Text>
        <Flex
          gap="3rem"
          align="center"
          w="30%"
          justify="end"
          display={{ base: "none", lg: "flex" }}
        >
          <CartIcon />
          <SearchIcon />
          {/* <DarkModeButton /> */}
          <MenuButton />
        </Flex>
        <Flex display={{ base: "flex", lg: "none" }}>
          <MenuButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;

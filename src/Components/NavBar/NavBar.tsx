import {
  Flex,
  Box,
  Heading,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { DarkModeButton } from "./DarkModeButton";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "../../Icons";
import CartIcon from "./IconsNavbar/CartIcon";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      position="fixed"
      w="100vw"
      h="4rem"
      bg={useColorModeValue(
        "rgba(222, 222, 222, 0.6)",
        "rgba(26, 26, 26, 0.6)"
      )}
      zIndex="1"
    >
      <Box mx="1rem">
        <Link to="/">
          <Heading size="md" color="#cc5823">
            Logo
          </Heading>
        </Link>
      </Box>
      <Flex gap="1.5rem" mx="1rem" justify="center" align="center">
        <Flex>
          <AiOutlineSearch size="1.5rem" />
        </Flex>
        <CartIcon />
        <DarkModeButton />
        <MenuButton />
      </Flex>
    </Flex>
  );
};

export default NavBar;

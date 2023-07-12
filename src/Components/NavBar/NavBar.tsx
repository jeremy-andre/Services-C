import { Flex } from "@chakra-ui/react";
import MenuButton from "./IconsNavbar/MenuButton/MenuButton";
import Categories from "./IconsNavbar/Categories/Categories";
import Logo from "./IconsNavbar/Logo/Logo";
import IconsRightNavBar from "./IconsRightNavBar";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      position="fixed"
      w="100%"
      bg="rgba(255, 255, 255, 1)"
      zIndex="5"
      h="4rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Flex
        w="100%"
        maxW="105rem"
        justify="space-between"
        px={{ base: "1rem", lg: "3rem" }}
      >
        <Categories />
        <Logo />
        <IconsRightNavBar />
      </Flex>
    </Flex>
  );
};

export default NavBar;

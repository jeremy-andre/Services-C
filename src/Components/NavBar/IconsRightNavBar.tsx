import { Flex } from "@chakra-ui/react";
import CartIcon from "./IconsNavbar/CartIcon/CartIcon";
import SearchIcon from "./IconsNavbar/SearchIcon/SearchIcon";
import MenuButton from "./IconsNavbar/MenuButton/MenuButton";

const IconsRightNavBar = () => {
  return (
    <Flex gap="3rem" align="center" w="30%" justify="end">
      <CartIcon />
      <SearchIcon />
      <MenuButton />
    </Flex>
  );
};

export default IconsRightNavBar;

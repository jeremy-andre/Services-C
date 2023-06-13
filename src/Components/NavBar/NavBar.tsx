import { Flex, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { DarkModeButton } from "./DarkModeButton";
import MenuButton from "./MenuButton";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      position='fixed'
      w='100vw'
      h='4rem'
      bg={useColorModeValue("#dedede", "#1a1a1a")}
      zIndex='1'
    >
      <Box mx="1rem">
        <Heading size="md" color="#cc5823">
          Logo
        </Heading>
      </Box>
      <Flex gap="1rem" mx="1rem" justify="center" align="center">
        <MenuButton />
        <DarkModeButton />
      </Flex>
    </Flex>
  );
};

export default NavBar;

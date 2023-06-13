import { useState } from "react";
import { Box, Button, Collapse, Flex, useColorMode } from "@chakra-ui/react";
import { AiOutlineMenu } from "../../Icons";
import { Link } from "react-router-dom";

const MenuButtonExample = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex position="relative" justify="center">
      <Button onClick={handleToggleMenu}>
        <AiOutlineMenu size="1.5rem" />
      </Button>
      <Flex
        position="absolute"
        mt="4rem"
        boxShadow="0px 5px 10px rgba(0, 0, 0, 0.3)"
        bg={isDark ? "#1f1f1f" : "#dedede"}
        borderRadius="md"
      >
        <Collapse in={isMenuOpen} >
          <Box p="0.5rem">
            <Flex direction="column" w="14rem">
              <Link to="/">
                <Flex p="0.5rem" justify="center" onClick={handleToggleMenu}>
                  Home
                </Flex>
              </Link>
              <Link to="/about">
                <Flex p="0.5rem" justify="center" onClick={handleToggleMenu}>
                  About
                </Flex>
              </Link>
            </Flex>
          </Box>
        </Collapse>
      </Flex>
    </Flex>
  );
};

export default MenuButtonExample;

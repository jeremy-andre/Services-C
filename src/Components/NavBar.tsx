import { Flex, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" p={4} boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.1)" bg='red'>
      <Box>
        <Heading as="h1" size="md"  >
          Logo
        </Heading>
      </Box>
      <Box>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Box>
    </Flex>
  );
};

export default NavBar;

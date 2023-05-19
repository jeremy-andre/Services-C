import { Flex, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DarkModeButton } from "../DarkModeButton/DarkModeButton";

const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" p={4} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)">
      <Box mx='1rem'>
        <Heading size="md" color='#cc5823'>
          Logo
        </Heading>
      </Box>
      <Flex gap='1rem' mx='1rem' justify='center' align='center'> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <DarkModeButton/>
      </Flex>
    </Flex>
  );
};

export default NavBar;

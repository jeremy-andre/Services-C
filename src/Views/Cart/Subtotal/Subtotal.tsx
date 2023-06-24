import {
  Flex,
  Image,
  Text,
  Select,
  Button,
  Heading,
  Box,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type Props = {};

const Subtotal = (props: Props) => {
  return (
    <Flex
      border="1px"
      borderRadius="1rem"
      maxW="25rem"
      h="100%"
      w="100%"
      direction="column"
      gap="1.5rem"
      px="1.5rem"
      py="2rem"
      mt="1rem"
    >
      <Heading fontSize="1.5rem">Tus Productos</Heading>
      <Flex justify="space-between">
        <Text fontSize="1rem">Subtotal</Text>
        <Text fontSize="1rem">S/100.00</Text>
      </Flex>
      <Flex justify="space-between" fontWeight="bold">
        <Text fontSize="1rem">TOTAL</Text>
        <Text fontSize="1rem">S/100.00</Text>
      </Flex>
      <Button colorScheme="green">PAGAR</Button>
      <Flex justify="center" gap="1rem">
        <Text fontSize="1rem">o</Text>
        <Link as={RouterLink} to="/products">
          <Text fontSize="1rem" color="#cc5823">
            Continuar comprando
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Subtotal;

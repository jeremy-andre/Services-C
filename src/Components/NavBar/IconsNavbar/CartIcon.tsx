import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "../../../Icons";
import { Link as RouterLink } from "react-router-dom";

type Props = {};

const CartIcon = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Flex onClick={onOpen} cursor="pointer">
        <AiOutlineShoppingCart size="1.5rem" />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue("#ffffff", "#1a1a1a")}>
          <DrawerCloseButton />
          <DrawerHeader>Mis Productos</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Flex direction="column" w="100%" gap='1rem'>
              <Flex justify="space-between">
                <Text>Subtotal</Text>
                <Text>S/.100.00</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>Total</Text>
                <Text>S/.100.00</Text>
              </Flex>
            </Flex>
          </DrawerFooter>
          <DrawerFooter>
            <Button
              as={RouterLink}
              to="/cart"
              w="100%"
              colorScheme="green"
              onClick={onClose}
            >
              Ir a mi Carrito
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default CartIcon;

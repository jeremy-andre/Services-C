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
  Divider,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "../../../../Icons";
import { Link as RouterLink } from "react-router-dom";

import CartItemDrawer from "./CartItemDrawer";
import { useAppSelector } from "../../../../redux/hooks";

type Props = {};

const CartIcon = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems = useAppSelector((state) => state.cart.cart);
  return (
    <Flex>
      <Flex onClick={onOpen} cursor="pointer">
        <AiOutlineShoppingCart color="#dedede" size="1.5rem" />
        <Flex
          position="absolute"
          borderRadius="full"
          transform="translate(1.3rem, -1rem)"
          color="#dedede"
        >
          {Math.min(cartItems.length, 9999).toLocaleString()}
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue("#ffffff", "#1a1a1a")}>
          <DrawerCloseButton />
          <DrawerHeader>Mis Productos</DrawerHeader>

          <DrawerBody>
            <Flex direction="column" gap="1rem">
              {cartItems.map((item, index) => (
                <>
                  <CartItemDrawer
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                  />
                  {index !== cartItems.length - 1 && (
                    <Divider
                      borderColor={useColorModeValue("#b4b4b4", "#4a4a4a")}
                    />
                  )}
                </>
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Flex direction="column" w="100%" gap="1rem">
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

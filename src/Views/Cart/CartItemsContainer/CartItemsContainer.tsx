import { Flex, Heading } from "@chakra-ui/react";
import CartItem from "../CartItem/CartItem";
import Subtotal from "../Subtotal/Subtotal";

type Props = {};

const CartItemsContainer = (props: Props) => {
  return (
    <Flex direction="column" gap="2rem" maxW="55rem">
      <Heading>Tus Productos</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </Flex>
  );
};

export default CartItemsContainer;

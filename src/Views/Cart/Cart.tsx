import { Flex } from "@chakra-ui/react";
import CartItemsContainer from "./CartItemsContainer/CartItemsContainer";
import Subtotal from "./Subtotal/Subtotal";

type Props = {};

const Cart = (props: Props) => {
  return (
    <Flex
      my="3rem"
      mx={{ base: "1rem", md: "3rem" }}
      justify="center"
      gap="5rem"
    >
      <CartItemsContainer />
      <Subtotal />
    </Flex>
  );
};

export default Cart;

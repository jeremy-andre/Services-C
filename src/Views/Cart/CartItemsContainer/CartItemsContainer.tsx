import { Flex, Heading, Text } from "@chakra-ui/react";
import CartItem from "../CartItem/CartItem";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers/reducers";

const CartItemsContainer = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  return (
    <Flex direction="column" gap="2rem" maxW="55rem">
      <Heading>Tus Productos</Heading>
      {cartItems.length > 0 ? (
        cartItems?.map((item) => (
          <CartItem
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))
      ) : (
        <Flex bg="red">
          <Text>NO HAY ITEMS EN EL CARRITO</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default CartItemsContainer;

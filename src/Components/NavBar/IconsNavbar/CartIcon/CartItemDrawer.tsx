import { Flex, Text, Image } from "@chakra-ui/react";
import { AiOutlineClose } from "../../../../Icons";
import { Item } from "../../../../redux/types";

import { popToCart } from "../../../../redux/reducers/cartReducer";
import { useAppDispatch } from "../../../../redux/hooks";

const CartItemDrawer = (props: Item) => {
  const dispatch = useAppDispatch();
  const handlePopToCart = () => {
    dispatch(popToCart(props.id));
  };
  return (
    <Flex gap="1rem" w="100%" justify="space-between">
      <Image
        src={props.image}
        alt="cardItem"
        w="5rem"
        aspectRatio="1"
        borderRadius="1rem"
      />
      <Flex direction="column" justify="space-between" w="100%">
        <Flex justify="space-between">
          <Text> {props.name} </Text>
          <Flex
            onClick={handlePopToCart}
            cursor="pointer"
            justify="center"
            align="center"
            h="100%"
          >
            <AiOutlineClose size="1rem" />
          </Flex>
        </Flex>
        <Text> personalizable, 1m</Text>
        <Flex justify="space-between" align="end">
          <Text textAlign="start" fontSize="0.8rem" color="gray.500">
            Precio:
          </Text>
          <Text textAlign="end" fontSize="0.9rem">
            S/. {props.price}.00
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItemDrawer;

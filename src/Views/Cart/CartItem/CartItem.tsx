import { Flex, Box, Image, Text, Select } from "@chakra-ui/react";
import { AiOutlineClose } from "../../../Icons";
import { Item } from "../../../redux/types";

import { popToCart } from "../../../redux/reducers/cartReducer";
import { useAppDispatch } from "../../../redux/hooks";

const CartItem = (props: Item) => {
  const dispatch = useAppDispatch();
  const handlePopToCart = () => {
    dispatch(popToCart(props.id));
  };

  return (
    <Flex align="center" gap="5rem">
      <Image
        src={props.image}
        alt="cardItem"
        w="10rem"
        aspectRatio="1"
        borderRadius="1rem"
      />
      <Flex direction="column">
        <Text> {props.name} </Text>
        <Text> personalizable, 1m</Text>
      </Flex>
      <Box display="inline-block">
        <Select defaultValue="1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </Box>
      <Text>S/. {props.price}.00</Text>
      <Flex onClick={handlePopToCart} cursor="pointer">
        <AiOutlineClose size="1.2rem" />
      </Flex>
    </Flex>
  );
};

export default CartItem;

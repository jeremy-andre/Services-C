import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "../../../../Icons";
// import { useDispatch } from "react-redux";
// import { useAppDispatch } from "../../../../redux/hooks";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/actions";
import { Item } from "../../../../redux/types";

const ItemCard = (props: Item) => {
  // const dispatch = useDispatch();

  const producto = {
    id: props.id,
    image: props.image,
    name: props.name,
    price: props.price,
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(producto));
  };

  return (
    <Box>
      <Flex
        justify="center"
        direction="column"
        //   filter={design.active ? "none" : "grayscale(90%)"}
      >
        <Image src={props.image} alt="cardItem" aspectRatio={1} />
        <Text
          fontWeight="thin"
          py="1rem"
          fontSize={{ base: "1rem", md: "1.2rem" }}
          wordBreak="break-all"
        >
          {props.name}
        </Text>
        <Flex justify="space-between" align="center">
          <Text
            fontWeight="normal"
            py="1rem"
            fontSize={{ base: "1rem", md: "1.2rem" }}
          >
            S/. {props.price}.00
          </Text>
          <Flex justify="center" align="center">
            <Button gap="0.5rem" onClick={handleAddToCart}>
              <Text>Añadir</Text>
              <AiOutlineShoppingCart />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ItemCard;

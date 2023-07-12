import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "../../../../Icons";
// import { useDispatch } from "react-redux";
// import { useAppDispatch } from "../../../../redux/hooks";
// import { addToCart } from "../../../../redux/actions";
import { Item } from "../../../../redux/types";
import { Link } from "react-router-dom";

import { addToCart } from "../../../../redux/reducers/cartReducer";
import { useAppDispatch } from "../../../../redux/hooks";

const ItemCard = (props: Item) => {
  // const dispatch = useDispatch();

  const producto = {
    id: props.id,
    image: props.image,
    name: props.name,
    price: props.price,
    category: props.category,
  };

  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(producto));
  };

  return (
    <Box>
      <Flex
        justify="center"
        direction="column"
        bg="rgb(230, 230 ,230, 1)"
        //   filter={design.active ? "none" : "grayscale(90%)"}
      >
        <Link to={`/products/${props.category}/${props.name}`}>
          <Image src={props.image[0].url} alt="cardItem" aspectRatio={1} />
        </Link>
        <Text
          fontWeight="thin"
          py="1rem"
          px="1rem"
          fontSize={{ base: "1rem", md: "1.2rem" }}
          wordBreak="break-all"
        >
          {props.name}
        </Text>
        <Flex justify="space-between" align="center" px="1rem">
          <Text
            fontWeight="normal"
            py="1rem"
            fontSize={{ base: "1rem", md: "1.2rem" }}
          >
            S/. {props.price}
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

import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "../../../../Icons";
// import { pushToCart } from "../../../../redux/actions";
// import { useDispatch } from "react-redux";
// import { useAppDispatch } from "../../../../redux/hooks";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../../../../redux/actions";
import { RootState } from "../../../../redux/reducers/reducers";

type Props = {};

const ItemCard = (props: Props) => {
  // const dispatch = useDispatch();

  const handleAddToCart = () => {
    // dispatch(pushToCart());
  };
  //--------------------------------------------------

  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter.count);
  console.log(counters);

  const handleIncrement = () => {
    dispatch(incrementCounter(counters + 1));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(counters - 1));
  };
  //--------------------------------------------------

  return (
    <Box>
      <Flex
        justify="center"
        direction="column"
        //   filter={design.active ? "none" : "grayscale(90%)"}
      >
        <Image
          src="https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686714288/Servicesc/Mueble_Ba%C3%B1o_ez0ew9.jpg"
          alt="cardItem"
        />
        <Text
          fontWeight="thin"
          py="1rem"
          fontSize={{ base: "1rem", md: "1.2rem" }}
          wordBreak="break-all"
        >
          {/* {design.name} */} Vanitorios
        </Text>
        <Flex justify="space-between" align="center">
          <Text
            fontWeight="semibold"
            py="1rem"
            fontSize={{ base: "1rem", md: "1.2rem" }}
          >
            {/* {design.name} */} S/. 100.00
          </Text>
          <Flex justify="center" align="center">
            <Button gap="0.5rem" onClick={handleAddToCart}>
              <Text>Añadir</Text>
              <AiOutlineShoppingCart />
            </Button>
          </Flex>
          {/* <Flex>
            <Text>Counter: {counters}</Text>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
          </Flex> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ItemCard;

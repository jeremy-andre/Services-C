import { Flex, Badge, Heading, Text, Button } from "@chakra-ui/react";
import { Item } from "../../../../redux/types";
import ColorSelect from "./ColorSelect";
import SizeSelect from "./SizeSelect";
import QuantitySelect from "./QuantitySelect";
import { useAppDispatch } from "../../../../redux/hooks";
import { addToCart } from "../../../../redux/reducers/cartReducer";

type Props = {
  item: Item;
};

const ItemDates = ({ item }: Props) => {
  const producto = {
    id: item.id,
    image: item.image,
    name: item.name,
    price: item.price,
    category: item.category,
  };

  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(producto));
  };

  return (
    <Flex direction="column" maxW="30rem">
      <Flex>
        <Badge bg="green.300">Nuevo</Badge>
      </Flex>
      <Heading>{item.name}</Heading>
      <Text my="1rem" fontSize="1.5rem" fontWeight="thin">
        S/. {item?.price}
      </Text>
      <Text mb="1rem" textAlign="justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo
        magnam, alias voluptates atque officia accusantium quia dolores aut,
        ducimus ut? Ut quod dicta magnam, obcaecati velit facere beatae neque?
      </Text>
      <Flex justify="space-between" mb="1.5rem">
        <ColorSelect />
        <SizeSelect />
      </Flex>
      <Flex justify="space-between" mb="1.5rem">
        <QuantitySelect />
        <Flex>Compartir</Flex>
      </Flex>
      <Button colorScheme="green" onClick={handleAddToCart}>
        Añadir al carro
      </Button>
    </Flex>
  );
};

export default ItemDates;

import { Flex, Box, Image, Text, Select, Button } from "@chakra-ui/react";
import { AiOutlineClose } from "../../../Icons";

type Props = {};

const CartItem = (props: Props) => {
  return (
    <Flex align="center" gap="5rem">
      <Image
        src="https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686714288/Servicesc/Mueble_Ba%C3%B1o_ez0ew9.jpg"
        alt="cardItem"
        w="10rem"
        aspectRatio="1"
        borderRadius="1rem"
      />
      <Flex direction="column">
        <Text> Vanitorio</Text>
        <Text> personalizable, 1m</Text>
      </Flex>
      <Box display="inline-block">
        <Select defaultValue="1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </Box>
      <Text>S/100.00</Text>
      <Flex>
        <AiOutlineClose size="1.2rem" />
      </Flex>
    </Flex>
  );
};

export default CartItem;

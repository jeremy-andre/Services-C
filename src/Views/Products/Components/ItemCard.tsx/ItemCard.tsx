import { Flex, Link, Text, Image, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "../../../../Icons";

type Props = {};

const ItemCard = (props: Props) => {
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
            <Button gap="0.5rem">
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

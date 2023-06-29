import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Badge,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import SlidesShow from "./SlidesShow";

type Props = {};

const ItemDetail = (props: Props) => {
  const images = [
    "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
    "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
    "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
    // Agrega más imágenes según necesites
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <Flex justify="center">
      <Flex
        maxW="80rem"
        w="100%"
        justify="space-between"
        px="2rem"
        py="4rem"
        gap="5rem"
      >
        <Flex direction="column" maxW="30rem">
          <Flex>
            <Badge bg="red.400">Nuevo</Badge>
          </Flex>
          <Heading>Name Item Detail</Heading>
          <Text my="1rem" fontSize="1.5rem" fontWeight="thin">
            S/. 100.00
          </Text>
          <Text mb="1rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nemo magnam, alias voluptates atque officia accusantium quia dolores
            aut, ducimus ut? Ut quod dicta magnam, obcaecati velit facere beatae
            neque?
          </Text>
          <Flex bg="blue" justify="space-between" h="5rem" mb="1rem">
            <Flex>Color</Flex>
            <Flex>Size</Flex>
          </Flex>
          <Flex justify="space-between" h="5rem">
            <Flex bg="red">Quantity</Flex>
            <Flex>Compartir</Flex>
          </Flex>
          <Button colorScheme="green" my="1rem">
            Añadir al carro
          </Button>
        </Flex>
        <Flex maxW="40rem">
          <SlidesShow />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ItemDetail;

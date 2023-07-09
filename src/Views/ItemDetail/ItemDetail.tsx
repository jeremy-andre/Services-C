import { Flex, Heading, Text, Button, Badge } from "@chakra-ui/react";
import SlidesShow from "./SwiperDetail/SlidesShow";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getItemByName } from "../../redux/reducers/itemsReducer";

import { uploadItemByName } from "../../redux/actionsApi";
// type Props = {};

const ItemDetail = () => {
  // const images = [
  //   "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
  //   "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686713118/Servicesc/Jadin_Mueble_ywtkqj.jpg",
  //   "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712752/Servicesc/Pared_Decorativa_cprjeu.jpg",
  //   "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
  // ];

  const dispatch = useAppDispatch();
  const { itemName } = useParams();
  const itemNameDetail = itemName || "sin itemNameDetail";
  useEffect(() => {
    dispatch(uploadItemByName(itemNameDetail));
  }, []);

  const itemNameRender = useAppSelector((state) => state.items.itemName)[0];
  const isLoading = useAppSelector((state) => state.items.status === "loading");

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!itemNameRender) {
    return <div>No se encontró el item.</div>;
  }

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
          <Heading>{itemNameRender?.name}</Heading>
          <Text my="1rem" fontSize="1.5rem" fontWeight="thin">
            {itemNameRender?.price}
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
        {/* <Flex maxW="40rem"> */}
        <SlidesShow images={itemNameRender?.image} />
        {/* </Flex> */}
      </Flex>
    </Flex>
  );
};

export default ItemDetail;

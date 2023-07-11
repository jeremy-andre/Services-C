import { Flex, Spinner, Center } from "@chakra-ui/react";
import SlidesShow from "./components/SlidesShow/SlidesShow";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { uploadItemByName } from "../../redux/actionsApi";
import ItemDates from "./components/ItemDates/ItemDates";

const ItemDetail = () => {
  // Llamada a la Api para cargar el ItemNameDetail ---------------------
  const dispatch = useAppDispatch();
  const { itemName } = useParams();
  const itemNameDetail = itemName || "sin itemNameDetail";
  useEffect(() => {
    dispatch(uploadItemByName(itemNameDetail));
  }, []);

  const itemNameRender = useAppSelector((state) => state.items.itemName)[0];
  const isLoading = useAppSelector((state) => state.items.status === "loading");

  if (!itemNameRender) {
    return <div>No se encontró el item.</div>;
  }

  if (isLoading) {
    return (
      <Center h="40rem">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
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
        <ItemDates item={itemNameRender} />
        <SlidesShow image={itemNameRender.image} />
      </Flex>
    </Flex>
  );
};

export default ItemDetail;

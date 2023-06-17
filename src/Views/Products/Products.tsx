import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Filter from "./Components/FilterProducts/Filter";
import BreadCrumps from "./Components/BreadCrumps/BreadCrumps";
import Categories from "./Components/Categories/Categories";
import ItemsContainer from "./Components/ItemsContainer/ItemsContainer";

const Products = () => {
  const { category } = useParams();
  const categoryName = category || "sin categoria";

  // Validar si la categoría existe o no ----♫----
  const validCategories = [
    "cocina",
    "closet",
    "escritorios",
    "estantes",
    "repisas",
    "paredes-decorativas",
    "muebles-de-aseo",
    "aire-libre",
    "sin categoria",
  ];
  const categoryExists = validCategories.includes(categoryName);
  if (!categoryExists)
    return <Flex> NO EXISTE ALGUNA CATEGORIA CON {categoryName}</Flex>;

  return (
    <Flex
      my="2rem"
      direction="column"
      mx={{ base: "1rem", md: "3rem" }}
      align="center"
    >
      <BreadCrumps />
      {categoryName === "sin categoria" ? <Categories /> : <Filter />}
      <ItemsContainer />
    </Flex>
  );
};

export default Products;

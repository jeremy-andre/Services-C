import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Filter from "./Components/FilterProducts/Filter";
import BreadCrumps from "./Components/BreadCrumps/BreadCrumps";
import Categories from "./Components/Categories/Categories";
import ItemsContainer from "./Components/ItemsContainer/ItemsContainer";
//--UploadItems_UseEffect----♫--------------------------------
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { uploadItems } from "../../redux/actionsApi";

const Products = () => {
  const { category } = useParams();
  const categoryName = category || "sin categoria";

  //--Validar_si_la_categoría_existe_o_no----♫------------------
  const validCategories = [
    "escritorios",
    "repisas",
    // "cocina",
    // "closet",
    // "estantes",
    // "paredes-decorativas",
    // "muebles-de-aseo",
    // "aire-libre",
    "sin categoria",
  ];
  const categoryExists = validCategories.includes(categoryName);
  if (!categoryExists)
    return <Flex> NO EXISTE ALGUNA CATEGORIA CON {categoryName}</Flex>;

  //--UploadItems_UseEffect----♫--------------------------------

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(uploadItems());
  }, []);

  return (
    <Flex
      my="2rem"
      direction="column"
      mx={{ base: "1rem", md: "3rem" }}
      align="center"
    >
      <BreadCrumps />
      {categoryName === "sin categoria" ? <Categories /> : <Filter />}
      {categoryName !== "sin categoria" && <ItemsContainer />}
    </Flex>
  );
};

export default Products;

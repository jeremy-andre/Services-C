import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Filter from "./Components/FilterProducts/Filter";
import BreadCrumps from "./Components/BreadCrumps/BreadCrumps";
import Categories from "./Components/Categories/Categories";
import ItemsContainer from "./Components/ItemsContainer/ItemsContainer";
//--UploadItems_UseEffect----♫--------------------------------
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadItems } from "../../redux/actions";

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
  const producto = [
    {
      id: 123,
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686713190/Servicesc/Mueble_JArdin_dfy0aa.jpg",
      name: "repo",
      price: 999,
    },
    {
      id: 124,
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686713118/Servicesc/Jadin_Mueble_ywtkqj.jpg",
      name: "baño",
      price: 100,
    },
    {
      id: 125,
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712896/Servicesc/Pared_Decorative_flgqbo.jpg",
      name: "cocina",
      price: 200,
    },
    {
      id: 126,
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712752/Servicesc/Pared_Decorativa_cprjeu.jpg",
      name: "repo",
      price: 300,
    },
    {
      id: 126,
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
      name: "repo",
      price: 300,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadItems(producto));
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

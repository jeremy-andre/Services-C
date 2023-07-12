import { Flex, Text, Heading, Link, Grid, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowUpRight } from "../../../Icons";

interface Designs {
  name: string;
  image: string;
  url: string;
  active: boolean;
}

const designs: Designs[] = [
  {
    name: "repisas",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
    url: "repisas",
    active: true,
  },
  {
    name: "escritorios",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711554/Servicesc/Desk_lyx27n.jpg",
    url: "escritorios",
    active: true,
  },
  {
    name: "estantes",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    url: "estantes",
    active: false,
  },
  {
    name: "Aire Libre",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686713190/Servicesc/Mueble_JArdin_dfy0aa.jpg",
    url: "aire-libre",
    active: false,
  },
];

const CategoriesHome = () => {
  return (
    <Flex my="3rem" direction="column" maxW="80rem" w="100%" gap="3rem">
      <Heading w="100%" px={{ base: "1rem", md: "3rem" }}>
        Categorias Populares
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={{ base: "1rem", md: "1rem", lg: "1.5rem", xl: "1.5rem" }}
        mx={{ base: "1rem", md: "3rem" }}
      >
        {designs.map((design) => (
          <motion.div
            key={design.name}
            whileHover={design.active ? { scale: 1.05 } : "none"}
          >
            <Link
              as={RouterLink}
              to={`/products/${design.url}`}
              style={{ textDecoration: "none" }}
              pointerEvents={design.active ? "auto" : "none"}
            >
              <Flex
                bgImage={design.image}
                bgSize="cover"
                bgPosition="center"
                boxShadow="inset 0 -60px 35px rgba(0, 0, 0, 0.5)"
                w="100%"
                h="100%"
                aspectRatio="1"
                borderRadius="0.5rem"
                justify="center"
                align="end"
                filter={design.active ? "none" : "grayscale(90%)"}
              >
                <Text
                  color="#dedede"
                  fontWeight="bold"
                  textTransform="uppercase"
                  py="1rem"
                  fontSize={{ base: "1rem", md: "1.2rem" }}
                >
                  {design.name}
                </Text>
              </Flex>
            </Link>
          </motion.div>
        ))}
      </Grid>
      <Flex justify="center">
        <Button as={RouterLink} to="/products" gap="0.5rem" colorScheme="green">
          <Text>Ver mas categorías</Text>
          <FiArrowUpRight />
        </Button>
      </Flex>
    </Flex>
  );
};

export default CategoriesHome;

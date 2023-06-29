import { Flex, Box, Text, Grid, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

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
    name: "cocina",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686710406/Servicesc/Cocina_jwqyaa.jpg",
    url: "cocina",
    active: false,
  },
  {
    name: "closet",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711309/Servicesc/Closet_eysodd.jpg",
    url: "closet",
    active: false,
  },
  {
    name: "estantes",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    url: "estantes",
    active: false,
  },
  {
    name: "paredes decorativas",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712896/Servicesc/Pared_Decorative_flgqbo.jpg",
    url: "paredes-decorativas",
    active: false,
  },
  {
    name: "muebles de aseo",
    image:
      "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686714288/Servicesc/Mueble_Ba%C3%B1o_ez0ew9.jpg",
    url: "muebles-de-aseo",
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

const Categories = () => {
  return (
    <Box maxW="80rem" w="100%">
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={{ base: "1rem", md: "1rem", lg: "1.5rem", xl: "1.5rem" }}
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
                borderRadius="1rem"
                justify="center"
                align="end"
                filter={design.active ? "none" : "grayscale(90%)"}
              >
                <Text
                  color="#dedede"
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize={{ base: "1rem", md: "1.2rem" }}
                  textAlign="center"
                  pb={{ base: "0.5rem", md: "1rem" }}
                >
                  {design.name}
                </Text>
              </Flex>
            </Link>
          </motion.div>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;

import { Flex, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Designs {
  name: string;
  url: string;
}

const designs: Designs[] = [
  {
    name: "cocina",
    url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686710406/Servicesc/Cocina_jwqyaa.jpg",
  },
  {
    name: "closet",
    url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711309/Servicesc/Closet_eysodd.jpg",
  },

  {
    name: "escritorio",
    url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711554/Servicesc/Desk_lyx27n.jpg",
  },
  {
    name: "estante",
    url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
  },
  {
    name: "repisas",
    url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
  },
  {
    name: "pared decorativa",
    url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712896/Servicesc/Pared_Decorative_flgqbo.jpg",
  },
  {
    name: "baño",
    url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686714288/Servicesc/Mueble_Ba%C3%B1o_ez0ew9.jpg",
  },
  {
    name: "jardin",
    url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686713190/Servicesc/Mueble_JArdin_dfy0aa.jpg",
  },
];

const Design = () => {
  return (
    <Flex
      my="2rem"
      flexWrap="wrap"
      maxW={{ base: "25rem", md: "45rem", lg: "60rem", xl: "80rem" }}
      gap={{ base: "1rem", md: "2rem", lg: "2rem", xl: "2rem" }}
      p="1rem"
      justify="center"
    >
      <Heading mb="1rem" w="100%">
        Diseños por categorias
      </Heading>
      {designs.map((design) => (
        <motion.div key={design.name} whileHover={{ scale: 1.05 }}>
          <Flex
            bgImage={design.url}
            bgSize="cover"
            bgPosition="center"
            boxShadow="inset 0 -60px 35px rgba(0, 0, 0, 0.5)"
            w={{ base: "11rem", md: "13rem", lg: "13rem", xl: "18rem" }}
            h={{ base: "11rem", md: "13rem", lg: "13rem", xl: "18rem" }}
            borderRadius="1rem"
            justify="center"
            align="end"
            as="button"
          >
            <Text
              m="1.5rem"
              color="#dedede"
              fontWeight="bold"
              textTransform="uppercase"
            >
              {design.name}
            </Text>
          </Flex>
        </motion.div>
      ))}
    </Flex>
  );
};

export default Design;

import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  image: string;
  to: string;
}

const services: Service[] = [
  {
    title: "Diseño de muebles personalizados",
    description:
      "Creamos muebles únicos y personalizados que se adaptan a tus necesidades y estilo.",
    image: "https://example.com/image1.jpg",
    to: "/services/design",
  },
  {
    title: "Armado de muebles a medida",
    description:
      "Nos encargamos de armar y ensamblar muebles a medida, asegurando la calidad y durabilidad.",
    image: "https://example.com/image2.jpg",
    to: "/services/build",
  },
  {
    title: "Renovación de muebles antiguos",
    description:
      "Damos nueva vida a tus muebles antiguos, restaurándolos y renovándolos con cuidado y atención al detalle.",
    image: "",
    to: "/services/renew",
  },
];

const Services = () => {
  return (
    <Box mb="4rem" mt="2rem">
      <Heading fontSize="2.5rem" textAlign="center" mb="2rem">
        Tambien realizamos estos Servicios
      </Heading>
      <Flex justify="center" align="center" gap="2rem">
        {services.map((service) => (
          <motion.div key={service.title} whileHover={{ scale: 1.05 }}>
            <Link to={service.to}>
              <Flex
                key={service.title}
                direction="column"
                h="11rem"
                w="20rem"
                borderRadius="1rem"
                boxShadow="0px 4px 8px rgba(0, 0, 0, 0.7)"
                bg='linear-gradient(to top, #e3733b, #f08854)'
                align="center"
                p="0.8rem"
                gap="1rem"
                color='#1a1a1a'
              >
                <Heading
                  fontSize="1.5rem"
                  textAlign="center"
                  h="5rem"
                  mx="2rem"
                >
                  {service.title}
                </Heading>
                <Text fontSize="1rem" h="100%" textAlign="center">
                  {service.description}
                </Text>
              </Flex>
            </Link>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;

import { Flex, Box, Heading, Text } from "@chakra-ui/react";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Diseño de muebles personalizados",
    description:
      "Creamos muebles únicos y personalizados que se adaptan a tus necesidades y estilo.",
    image: "https://example.com/image1.jpg",
  },
  {
    title: "Armado de muebles a medida",
    description:
      "Nos encargamos de armar y ensamblar muebles a medida, asegurando la calidad y durabilidad.",
    image: "https://example.com/image2.jpg",
  },
  {
    title: "Renovación de muebles antiguos",
    description:
      "Damos nueva vida a tus muebles antiguos, restaurándolos y renovándolos con cuidado y atención al detalle.",
    image: "",
  },
];

const Services = () => {
  return (
    <Box mb='4rem' mt='2rem'>
      <Heading fontSize="2.5rem" textAlign="center" mb='2rem'>
        Realizamos estos Servicios
      </Heading>
      <Flex justify="center" align="center" gap="2rem">
        {services.map((service) => (
          <Flex
            key={service.title}
            direction="column"
            h="11rem"
            w="20rem"
            borderRadius="1rem"
            border="1px"
            borderColor="#cc5823"
            backgroundImage={service.image}
            align="center"
            p="0.8rem"
            gap="1rem"
          >
            <Heading fontSize="1.5rem" h="5rem" textAlign="center" mx="2rem">
              {service.title}
            </Heading>
            <Text fontSize="1rem" h="100%" textAlign="center">
              {service.description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;

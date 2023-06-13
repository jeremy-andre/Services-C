import { Box, Center, Heading, Text, Button, Image } from "@chakra-ui/react";
import { BiArrowFromLeft } from "react-icons/bi";
const Showcase = () => {
  return (
    <Box position="relative">
      <Image
        src="https://res.cloudinary.com/dzxiqsg9i/image/upload/v1684622293/Servicesc/Dise%C3%B1o_sin_t%C3%ADtulo_jl3slq.png"
        w="100vw"
        h="30rem"
        maxW="120rem"
      />
      <Center
        flexDirection="column"
        position="absolute"
        top="75%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="80%"
        maxW="35rem"
        textAlign="center"
        color="#616161"
        bg="rgba(207, 205, 204, 0.6)"
        borderRadius="md"
        p="1rem"
      >
        <Heading size="xl" color="#f0380a">
          Título del Showcase
        </Heading>
        <Text fontSize="lg" mt={4}>
          Descripción del Showcase
        </Text>
        <Button
          rightIcon={<BiArrowFromLeft />}
          colorScheme="white"
          size="lg"
          mt="2rem"
          color="#1a1a1a"
        >
          Botón del Showcase
        </Button>
      </Center>
    </Box>
  );
};

export default Showcase;

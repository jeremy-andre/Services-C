import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const Proyects = () => {
  return (
    <Flex justify="center" gap="4rem" mb="4rem">
      <Flex h="30rem" w="30rem" justify='center' bg='green'>
        <Image src="https://res.cloudinary.com/dzxiqsg9i/image/upload/v1684706517/Servicesc/habitacion-moderna-vacia-muebles_1_a95jqe.jpg" alt='image' />
      </Flex>
      <Flex direction="column" w="30rem" bg="red" gap="1rem">
        <Heading>TITULO PROYECTO</Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          ipsum impedit eaque sit vero. Quae animi, libero quaerat aperiam
          deserunt, distinctio dicta nam accusamus aspernatur recusandae facere
          possimus, nihil voluptatibus!
        </Text>
        <Heading>Materiales Usados</Heading>
      </Flex>
    </Flex>
  );
};

export default Proyects;

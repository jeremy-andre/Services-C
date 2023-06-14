import { useState } from "react";
import {
  Divider,
  Button,
  Collapse,
  Flex,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "../../Icons";
import { Link } from "react-router-dom";

const MenuButtonExample = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex justify="end">
      <Button onClick={handleToggleMenu}>
        <AiOutlineMenu size="1.5rem" />
      </Button>
      <Flex
        position="absolute"
        mt="4rem"
        boxShadow="0px 5px 10px rgba(0, 0, 0, 0.3)"
        bg={useColorModeValue("#dedede", "#1a1a1a")}
        borderRadius="md"
      >
        <Collapse in={isMenuOpen}>
          <Flex p="1.5rem" gap="1rem">
            <Flex direction="column" w="10rem">
              <Heading fontSize="1.2rem" pb="1rem" px="1rem" borderBottom="1px">
                Categorias
              </Heading>
              <Flex direction="column" mt="1rem" gap="0.5rem">
                <Text px="1rem">Cocina</Text>
                <Text px="1rem">Closet</Text>
                <Text px="1rem">Escritorio</Text>
                <Text px="1rem">Estante</Text>
                <Text px="1rem">Repisa</Text>
                <Text px="1rem">Pared Decorativa</Text>
                <Text px="1rem">Baño</Text>
                <Text px="1rem">Jardin</Text>
              </Flex>
            </Flex>
            <Flex direction="column" w="10rem">
              <Heading fontSize="1.2rem" pb="1rem" px="1rem" borderBottom="1px">
                Servicios
              </Heading>
              <Divider />
              <Flex direction="column" mt="1rem" gap="1rem">
                <Link to="/about">
                  <Heading
                    fontSize="1rem"
                    px="1rem"
                    w="10rem"
                    onClick={handleToggleMenu}
                  >
                    Diseño Personalizado
                  </Heading>
                </Link>
                <Link to="/about">
                  <Heading
                    fontSize="1rem"
                    px="1rem"
                    w="10rem"
                    onClick={handleToggleMenu}
                  >
                    Servicio de Armado
                  </Heading>
                </Link>
                <Heading
                  fontSize="1rem"
                  px="1rem"
                  w="10rem"
                  onClick={handleToggleMenu}
                >
                  Renovación de mueble antiguo
                </Heading>
              </Flex>
            </Flex>
          </Flex>
        </Collapse>
      </Flex>
    </Flex>
  );
};

export default MenuButtonExample;

import {
  Collapse,
  Flex,
  useDisclosure,
  Text,
  useOutsideClick,
  Image,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const New = () => {
  const productOfferts = [
    {
      id: 1,
      nombre: "Producto 1",
      image:
        "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
      precio: 10.99,
    },
    {
      id: 2,
      nombre: "Producto 2",
      image:
        "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
      precio: 19.99,
    },
    {
      id: 3,
      nombre: "Producto 3",
      image:
        "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
      precio: 15.99,
    },
  ];

  const { isOpen, onToggle, onClose } = useDisclosure();

  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => {
      onClose();
    },
  });
  return (
    <Flex direction="column" ref={ref}>
      <Flex onClick={onToggle} color="#dedede" cursor="pointer" gap="2rem">
        <Text>Nuevo</Text>
      </Flex>

      <Collapse in={isOpen}>
        <Flex
          direction="column"
          px={{ base: "1rem", lg: "3rem" }}
          py="1rem"
          color="white"
          mt="1.5rem"
          bg="rgba(30, 30, 30, 0.95)"
          shadow="md"
          position="absolute"
          left="0"
          w="100%"
          align="center"
        >
          <Text
            fontSize="2rem"
            fontWeight="light"
            w="100%"
            maxW="80rem"
            mb="1.5rem"
          >
            Nuevos Productos
          </Text>
          <Flex gap="4rem" maxW="80rem">
            {productOfferts.map((producto) => (
              <Flex key={producto.id} direction="column" gap="0.5rem" w="20%">
                <Image
                  aspectRatio="1"
                  borderRadius="1rem"
                  src={producto.image}
                  alt="Offert Product"
                />
                <Text fontSize="1rem">Nombre Producto</Text>
                <Flex justify="space-between">
                  <Text fontSize="1rem">S/. 100.00</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default New;

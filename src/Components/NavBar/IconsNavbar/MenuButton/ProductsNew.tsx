import { Flex, Button, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineLine } from "../../../../Icons";

type Props = {};

const ProductsNew = (props: Props) => {
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

  const [show, SetInShow] = useState(false);
  const handleOnMin = () => {
    SetInShow(!show);
  };

  return (
    <Flex direction="column" pb="1rem" gap="1.5rem">
      <Flex justify="space-between" w="100%">
        <Text>Nuevos Productos</Text>
        <Flex cursor="pointer" onClick={handleOnMin}>
          {show ? (
            <AiOutlineLine size="1.2rem" />
          ) : (
            <AiOutlinePlus size="1.2rem" />
          )}
        </Flex>
      </Flex>
      {show && (
        <Flex justify="space-between">
          {productOfferts.map((producto) => (
            <Flex direction="column" gap="0.5rem" w="32%">
              <Image
                aspectRatio="1"
                borderRadius="1rem"
                src={producto.image}
                alt="Offert Product"
              />
              <Text fontSize="0.7rem">Nombre Producto</Text>
              <Flex justify="space-between">
                <Text fontSize="0.6rem">S/. 100.00</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ProductsNew;

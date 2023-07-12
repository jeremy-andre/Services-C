import {
  Flex,
  useDisclosure,
  useOutsideClick,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { CiSearch } from "../../../../Icons";
import { useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const SearchIcon = (props: Props) => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const MotionFlex = motion(Flex);

  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => {
      onClose();
    },
  });

  const images = [
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711554/Servicesc/Desk_lyx27n.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686710406/Servicesc/Cocina_jwqyaa.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711309/Servicesc/Closet_eysodd.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712896/Servicesc/Pared_Decorative_flgqbo.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686714288/Servicesc/Mueble_Ba%C3%B1o_ez0ew9.jpg",
    },
  ];

  return (
    <Flex direction="column" ref={ref} align="center">
      <CiSearch
        onClick={onToggle}
        color="rgba(100, 130, 100, 1)"
        size="1.5rem"
        cursor="pointer"
      />
      <AnimatePresence>
        {isOpen && (
          <MotionFlex
            key="modal"
            p="1.5rem"
            mr="25rem"
            mt="3rem"
            w="35rem"
            justify="center"
            position="absolute"
            bg="rgba(255, 255, 255, 1)"
            direction="column"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <InputGroup borderColor="rgba(100, 130, 100, 0.6)">
              <InputRightElement pointerEvents="none">
                <CiSearch color="rgba(100, 130, 100, 0.6)" size="1.5rem" />
              </InputRightElement>
              <Input
                type="text"
                placeholder="¿Buscas algún producto?"
                color="rgba(100, 100, 100, 1)"
                focusBorderColor="rgba(100, 130, 100, 0.5)"
              />
            </InputGroup>
            <Flex gap="4rem" pt="1rem">
              <Grid
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap="1.5rem"
                w="100%"
              >
                {images.slice(0, 6).map((image) => (
                  <Flex direction="column" key={image.image}>
                    <Flex
                      key={image.image}
                      bgImage={image.image}
                      bgSize="cover"
                      bgPosition="center"
                      boxShadow="inset 0 -60px 35px rgba(0, 0, 0, 0.5)"
                      aspectRatio="1"
                      borderRadius="0.3rem"
                    />
                    <Text fontWeight="thin">nameItem</Text>
                    <Text fontWeight="thin">Price: S/99.00</Text>
                  </Flex>
                ))}
              </Grid>
            </Flex>
          </MotionFlex>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default SearchIcon;

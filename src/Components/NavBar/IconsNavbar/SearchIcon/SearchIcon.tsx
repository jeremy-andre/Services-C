import {
  Flex,
  useDisclosure,
  useOutsideClick,
  Text,
  Grid,
  Divider,
  AbsoluteCenter,
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
    <Flex
      direction="column"
      ref={ref}
      align="center"
      display={{ base: "none", lg: "flex" }}
    >
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
            pt="0.5rem"
            pb="1.5rem"
            // mr="25rem"
            mt="2.75rem"
            // w="35rem"
            left="0"
            right="0"
            align="center"
            position="absolute"
            bg="rgba(255, 255, 255, 1)"
            direction="column"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex direction="column" maxW="80rem" w="100%" align="center">
              <InputGroup borderColor="rgba(100, 130, 100, 0.6)" w="25rem">
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
              <Flex gap="4rem" pt="1rem" w="100%" justify="center">
                <Grid
                  templateColumns="repeat(6, 1fr)"
                  templateRows="repeat(1, 1fr)"
                  gap="1.5rem"
                  w="80%"
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
            </Flex>
          </MotionFlex>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default SearchIcon;

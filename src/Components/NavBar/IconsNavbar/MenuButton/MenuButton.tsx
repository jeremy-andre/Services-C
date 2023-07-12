import { useRef } from "react";
import {
  Collapse,
  Flex,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { CiMenuBurger } from "../../../../Icons";
import ProductsOffert from "./ProductsOffert";
import ProductsNew from "./ProductsNew";
import ViewCategory from "./ViewCategory";
import ViewCart from "./ViewCart";
import ViewAbout from "./ViewAbout";
import ViewCollection from "./ViewCollection";
import CustomDesigns from "./CustomsDesigns";
import CardsContainerMenu from "./CardsContainerMenu";
import TittlePoster from "./TittlePoster";

// type Props = {
//   onToggle: () => void;
// };

const MenuButton = () => {
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
      <Flex onClick={onToggle} color="rgba(100, 130, 100, 1)" cursor="pointer">
        <CiMenuBurger size="1.4rem" />
      </Flex>

      <Collapse in={isOpen}>
        <Flex
          mt="1.25rem"
          position="absolute"
          left="0"
          right="0"
          justify="center"
        >
          <Flex
            px={{ base: "1rem", lg: "3rem" }}
            maxW="105rem"
            shadow="md"
            bg="rgba(255, 255, 255, 1)"
            w="100%"
            justify="space-between"
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "1.3rem", lg: "none" }}
          >
            <TittlePoster />
            <CardsContainerMenu />
            <Flex direction="column" gap="2rem" w="13rem" pb="1rem" pt="1.5rem">
              {/* <SearchBar /> */}
              <ProductsOffert />
              <ProductsNew />
              <ViewCart onToggle={onToggle} />
              <ViewCategory onToggle={onToggle} />
              <CustomDesigns onToggle={onToggle} />
              <ViewCollection onToggle={onToggle} />
              <ViewAbout onToggle={onToggle} />
            </Flex>
          </Flex>
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default MenuButton;

import { Flex } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
  handlePrev: () => void;
  handleNext: () => void;
};

const SwiperButtons = ({ handlePrev, handleNext }: Props) => {
  return (
    <>
      <Flex
        onClick={handlePrev}
        position="absolute"
        left="1rem"
        top="50%"
        transform="translateY(-50%)"
        borderRadius="100%"
        zIndex="1"
        p="0.6rem"
        bg="#6fb058"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#4e7d3d" }}
        _active={{ bg: "#345229" }}
        color="white"
        cursor="pointer"
      >
        <FiChevronLeft />
      </Flex>
      <Flex
        onClick={handleNext}
        position="absolute"
        right="1rem"
        top="50%"
        transform="translateY(-50%)"
        borderRadius="100%"
        zIndex="1"
        p="0.6rem"
        bg="#6fb058"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#4e7d3d" }}
        _active={{ bg: "#345229" }}
        color="white"
        cursor="pointer"
      >
        <FiChevronRight />
      </Flex>
    </>
  );
};

export default SwiperButtons;

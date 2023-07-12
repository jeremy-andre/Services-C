import { Flex, Text, Box, background } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {};

const TittlePoster = (props: Props) => {
  const tittle = [
    { letter: "O" },
    { letter: "F" },
    { letter: "F" },
    { letter: "E" },
    { letter: "R" },
    { letter: "S" },
  ];

  return (
    <Flex
      direction={{ base: "row", lg: "column" }}
      fontSize="2.5rem"
      fontWeight="thin"
      color="white"
      bgGradient={{
        base: "linear(to-l, #2a5a4a, #1a1a1a)",
        lg: "linear(to-b, #2a5a4a, #1a1a1a)",
      }}
      align="center"
      justify="center"
      px={{ base: "none", lg: "1.5rem" }}
      gap={{ base: "1.5rem", lg: "0rem" }}
    >
      {tittle.map((letter, index) => (
        <Text key={index}>{letter.letter}</Text>
      ))}
    </Flex>
  );
};

export default TittlePoster;

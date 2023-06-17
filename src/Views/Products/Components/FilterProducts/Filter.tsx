import { Flex, Text, Fade, Button, useColorModeValue } from "@chakra-ui/react";
import FilterPrice from "./FilterPrice";
import { LuArrowDownWideNarrow, LuArrowDownAZ } from "../../../../Icons";

const Filter = () => {
  return (
    <Flex
      gap="2rem"
      borderBottom="1px"
      borderColor={useColorModeValue("#bebebe", "#2a2a2a")}
      pb="1rem"
      maxW='80rem' w='100%'
    >
      <Flex gap="0.5rem" align="center">
        <Text fontWeight="bold">Filtros</Text>
        <LuArrowDownWideNarrow />
      </Flex>
      <FilterPrice min={10} max={100} />
      <FilterPrice min={10} max={100} />
      <FilterPrice min={10} max={100} />
      <FilterPrice min={10} max={100} />
      <Flex gap="0.5rem" align="center" ml="auto">
        <Text fontWeight="bold">Orden</Text>
        <LuArrowDownAZ />
      </Flex>
      {/* <FilterPrice min={10} max={100} /> */}
    </Flex>
  );
};

export default Filter;

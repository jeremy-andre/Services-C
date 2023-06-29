import { Flex, InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "../../../../Icons";

type Props = {};

const SearchIcon = (props: Props) => {
  return (
    <Flex align="center" w={{ base: "100%", lg: "20rem" }}>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <AiOutlineSearch color="#dedede" size="1.5rem" />
        </InputRightElement>
        <Input
          type="text"
          placeholder="¿Buscas algún producto?"
          color="#dedede"
          focusBorderColor="#91e07b"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchIcon;

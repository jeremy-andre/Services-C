import { InputGroup, Input, InputRightElement, Flex } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <Flex >
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <CiSearch color="rgba(100, 130, 100, 0.6)" size="1.5rem" />
        </InputRightElement>
        <Input
          type="text"
          placeholder="¿Buscas algún producto?"
          color="rgba(100, 130, 100, 1)"
          focusBorderColor="rgba(100, 130, 100, 0.4)"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;

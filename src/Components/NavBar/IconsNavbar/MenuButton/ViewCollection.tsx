import { Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CiGrid41 } from "../../../../Icons";

type Props = {
  onToggle: () => void;
};

const ViewCollection = ({ onToggle }: Props) => {
  return (
    <Flex
      as={RouterLink}
      to="/collection"
      onClick={onToggle}
      align="center"
      justify="space-between"
      gap="1rem"
    >
      <CiGrid41 color="rgba(100, 130, 100, 1)" size="1.4rem" />
      <Text color="rgba(100, 130, 100, 1)">Colecciones</Text>
    </Flex>
  );
};

export default ViewCollection;

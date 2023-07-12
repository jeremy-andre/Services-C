import { Flex, Text } from "@chakra-ui/react";
import { CiGrid41 } from "../../../../Icons";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  onToggle: () => void;
};

const CustomDesigns = ({ onToggle }: Props) => {
  return (
    <Flex
      as={RouterLink}
      to="/custom-design"
      onClick={onToggle}
      align="center"
      justify="space-between"
      gap="1rem"
    >
      <CiGrid41 color="rgba(100, 130, 100, 1)" size="1.4rem" />
      <Text color="rgba(100, 130, 100, 1)">Diseño Personalizado</Text>
    </Flex>
  );
};

export default CustomDesigns;

import { Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Text
      as={RouterLink}
      to="/"
      fontSize="1.3rem"
      color="rgba(100, 130, 100, 1)"
    >
      Empresa Muebles
    </Text>
  );
};

export default Logo;

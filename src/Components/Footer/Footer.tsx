import { Flex, Box, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      as="footer"
      py="1.5rem"
      boxShadow="0px -4px 8px rgba(0, 0, 0, 0.2)"
      mt="auto"
      bg="#0f0f0f"
    >
      <Flex justify="center" align="center">
        <Text fontSize="sm" color="gray.400" textAlign='center'>
          © {new Date().getFullYear()} Empresa de Muebles. Todos los derechos
          reservados.
        </Text>
      </Flex>
      <Flex justify="center" align="center" mt="2" gap='0.4rem'>
        <Text fontSize="sm" color="gray.400">
          Desarrollado con ♥ por 
        </Text>
        <Link href="https://jeremyandre.netlify.app/" target="blank" fontSize="sm" color="#cc5823">
          Jeremy Andre
        </Link>
      </Flex>
      <Flex justify="center" align="center" mt="2">
        <Link href="/privacy-policy" fontSize="sm" color="gray.400" mr="4">
          Política de privacidad
        </Link>
        <Link href="/terms-of-service" fontSize="sm" color="gray.400">
          Términos de servicio
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;

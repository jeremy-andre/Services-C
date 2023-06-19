import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "../../../Icons";

type Props = {};

const CartIcon = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Flex onClick={onOpen} cursor="pointer">
        <AiOutlineShoppingCart size="1.5rem" />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mis Productos</DrawerHeader>

          <DrawerBody>IS HERE BRO</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default CartIcon;

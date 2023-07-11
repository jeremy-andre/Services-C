import { useState } from "react";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

type Props = {
  stock: number;
};

const QuantitySelect = ({ stock }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Flex direction="column" gap="0.7rem">
      <Text>Cantidad :</Text>
      <ButtonGroup size="sm" isAttached>
        <Button onClick={handleDecrement}>-</Button>
        <Button isDisabled>{quantity}</Button>
        <Button onClick={handleIncrement} isDisabled={quantity === stock}>
          +
        </Button>
      </ButtonGroup>
      <Text color="gray.500">
        Disponible : {stock} "i dont fkng know D:" unidades
      </Text>
    </Flex>
  );
};

export default QuantitySelect;

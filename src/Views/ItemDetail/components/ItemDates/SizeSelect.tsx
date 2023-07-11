import { Flex, Button, Text } from "@chakra-ui/react";

type Size = {
  label: string;
  value: string;
};

const sizes: Size[] = [
  { label: "30cm", value: "30cm" },
  { label: "60cm", value: "60cm" },
  { label: "90cm", value: "90cm" },
];

type Props = {
  onSelectSize: (size: Size) => void;
};

const SizeSelect = ({ onSelectSize }: Props) => {
  const handleSizeClick = (size: Size) => {
    onSelectSize(size);
  };

  return (
    <Flex direction="column" gap='0.7rem'>
      <Text>Tamaño :</Text>
      <Flex>
        {sizes.map((size) => (
          <Button
            key={size.value}
            variant="outline"
            borderColor="black"
            width="3.5rem"
            height="2.5rem"
            marginRight="0.7rem"
            onClick={() => handleSizeClick(size)}
          >
            {size.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default SizeSelect;

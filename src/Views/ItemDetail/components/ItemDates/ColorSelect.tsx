import { Flex, Button, ButtonProps, Text } from "@chakra-ui/react";

type Color = {
  name: string;
  value: string;
};

const colors: Color[] = [
  { name: "Red", value: "red.400" },
  { name: "Green", value: "green.400" },
  { name: "Blue", value: "blue.400" },
];

type Props = {
  onSelectColor: (color: Color) => void;
};

const ColorSelect = ({ onSelectColor }: Props) => {
  const handleColorClick = (color: Color) => {
    onSelectColor(color);
  };

  return (
    <Flex direction="column" gap='0.7rem'>
      <Text>Color :</Text>
      <Flex>
        {colors.map((color) => (
          <Button
            key={color.name}
            bgColor={color.value}
            width="2.5rem"
            height="2.5rem"
            borderRadius="50%"
            marginRight="0.7rem"
            onClick={() => handleColorClick(color)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ColorSelect;

import {
  Button,
  Fade,
  Flex,
  Text,
  useDisclosure,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiDownArrow } from "../../../Icons";
import { useState } from "react";

interface FilterPriceProps {
  min: number;
  max: number;
}

const FilterPrice: React.FC<FilterPriceProps> = ({ min, max }) => {
  const { isOpen, onToggle } = useDisclosure();

  const [range, setRange] = useState([min, max]);

  const handleChange = (value: number[]) => {
    setRange(value);
  };

  return (
    <Flex direction="column">
      <Button onClick={onToggle} rightIcon={<BiDownArrow />}>
        Precio
      </Button>
      <Fade in={isOpen}>
        <Flex
          direction="column"
          p="2rem"
          w="25rem"
          mt="4"
          bg={useColorModeValue("#dedede", "#1f1f1f")}
          boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
          rounded="md"
          position="absolute"
        >
          <RangeSlider
            onChange={handleChange}
            defaultValue={range}
            min={min}
            max={max}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack bg="#cc5823" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text mt="2" textAlign="center">
            S/.{range[0]} - S/.{range[1]}
          </Text>
        </Flex>
      </Fade>
    </Flex>
  );
};

export default FilterPrice;

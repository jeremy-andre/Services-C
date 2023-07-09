import { Box, Grid } from "@chakra-ui/react";
import ItemCard from "../ItemCard.tsx/ItemCard";
import { useSelector } from "react-redux";

//--Items_Types--------------------------------------
import { Item } from "../../../../redux/types";
import { useAppSelector } from "../../../../redux/hooks";

type Props = {};

const ItemsContainer = (props: Props) => {
  const items = useAppSelector((state) => state.items.items);

  return (
    <Box maxW="80rem" mt="3rem">
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={{ base: "1rem", md: "1rem", lg: "1.5rem", xl: "2.5rem" }}
      >
        {items.map((item: Item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            category={item.category}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsContainer;

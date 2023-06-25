import { Box, Grid } from "@chakra-ui/react";
import ItemCard from "../ItemCard.tsx/ItemCard";
import { useSelector } from "react-redux";

//--Items_Types--------------------------------------
import { RootState } from "../../../../redux/reducers/reducers";
import { Item } from "../../../../redux/types";

type Props = {};

const ItemsContainer = (props: Props) => {
  const items = useSelector((state: RootState) => state.items.items);

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
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsContainer;

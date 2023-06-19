import { Box, Grid } from "@chakra-ui/react";
import ItemCard from "../ItemCard.tsx/ItemCard";

type Props = {};

const ItemsContainer = (props: Props) => {
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
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Grid>
    </Box>
  );
};

export default ItemsContainer;

import { Grid, Flex, Text } from "@chakra-ui/react";

type Props = {};

const CardsContainerMenu = (props: Props) => {
  const images = [
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711554/Servicesc/Desk_lyx27n.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686710406/Servicesc/Cocina_jwqyaa.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711309/Servicesc/Closet_eysodd.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712896/Servicesc/Pared_Decorative_flgqbo.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686714288/Servicesc/Mueble_Ba%C3%B1o_ez0ew9.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711554/Servicesc/Desk_lyx27n.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686710406/Servicesc/Cocina_jwqyaa.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686711309/Servicesc/Closet_eysodd.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    },
  ];

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" }}
      templateRows={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap="1.3rem"
      w={{ base: "100%", lg: "70%" }}
      pb="1rem"
      pt="1.5rem"
    >
      {images.map((image, index) => (
        <Flex
          direction="column"
          key={index}
          display={{
            base: index < 2 ? "flex" : "none",
            lg: index < 10 ? "flex" : "none",
          }}
        >
          <Flex
            bgImage={image.image}
            bgSize="cover"
            bgPosition="center"
            boxShadow="inset 0 -60px 35px rgba(0, 0, 0, 0.3)"
            aspectRatio="1"
            borderRadius="0.3rem"
          />
          <Text fontWeight="thin">nameItem</Text>
          <Text fontWeight="thin">Price: S/99.00</Text>
        </Flex>
      ))}
    </Grid>
  );
};

export default CardsContainerMenu;

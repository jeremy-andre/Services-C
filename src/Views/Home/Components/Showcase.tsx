import { Pagination, Controller, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Flex, Center, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { BiArrowFromLeft } from "../../../Icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// type Props = {
//   image: {
//     url: string;
//   }[];
// };

const SlidesShow = () => {
  const image = [
    {
      url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1684622293/Servicesc/Dise%C3%B1o_sin_t%C3%ADtulo_jl3slq.png",
    },
    {
      url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    },
    {
      url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    },
    {
      url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    },
    {
      url: "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712046/Servicesc/Estante_h3ofmg.jpg",
    },
  ];

  return (
    <Flex gap="1rem" h="30rem" justify="center" w="100%">
      <Flex h="30rem" maxW="105rem" w="100%">
        <Swiper
          modules={[Pagination, Controller, Autoplay]}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (_, className) => `
              <span class="${className}" style="background-color: #4e7d3d; display: inline-block; width: 25px; height: 4px; border-radius: 0"></span>
            `,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {image.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                src={imageUrl.url}
                objectFit="cover"
                boxShadow="inset 0 -60px 35px rgba(0, 0, 0, 0.5)"
                w="100%"
                h="100%"
                cursor="pointer"
              />

              <Center
                flexDirection="column"
                position="absolute"
                top="75%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="80%"
                maxW="35rem"
                textAlign="center"
                color="#616161"
                bg="rgba(207, 205, 204, 0.6)"
                borderRadius="md"
                p="1rem"
              >
                <Heading size="xl" color="#f0380a">
                  Título del Showcase
                </Heading>
                <Text fontSize="lg" mt={4}>
                  Descripción del Showcase
                </Text>
                <Link to="/products">
                  <Button
                    rightIcon={<BiArrowFromLeft />}
                    colorScheme="white"
                    size="lg"
                    mt="2rem"
                    color="#1a1a1a"
                  >
                    Botón del Showcase
                  </Button>
                </Link>
              </Center>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default SlidesShow;

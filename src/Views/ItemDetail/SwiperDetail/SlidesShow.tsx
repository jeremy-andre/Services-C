import { useState } from "react";
import { Pagination, Controller, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Image, IconButton } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import "swiper/css/thumbs";

type Props = {
  images: string;
};

const SlidesShow = ({ images }: Props) => {
  const [swiper, setSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSlideChange = () => {
    if (thumbsSwiper) {
      setActiveIndex(swiper.activeIndex);
    }
  };

  // const images = [
  //   "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712423/Servicesc/Ledge_x2lnuh.jpg",
  //   "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686713118/Servicesc/Jadin_Mueble_ywtkqj.jpg",
  //   "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712752/Servicesc/Pared_Decorativa_cprjeu.jpg",
  //   "https://res.cloudinary.com/dzxiqsg9i/image/upload/v1686712752/Servicesc/Pared_Decorativa_cprjeu.jpg",
  //   // Agrega más imágenes según necesites
  // ];

  return (
    <Flex gap="1rem" h="30rem">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Controller, Thumbs]}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: swiper }}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        style={{
          "--swiper-pagination-color": "#91e07b",
          height: "30rem",
          aspectRatio: "1",
        }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index} style={{}}>
            <Image
              src={imageUrl.url}
              alt={`Slide ${index + 1}`}
              h="100%"
              w="100%"
            />
          </SwiperSlide>
        ))}
        <IconButton
          icon={<FiChevronLeft />}
          onClick={handlePrev}
          position="absolute"
          left="1rem"
          top="50%"
          transform="translateY(-50%)"
          fontSize="1xl"
          borderRadius="100%"
          colorScheme="gray"
          zIndex="1"
        />
        <IconButton
          icon={<FiChevronRight />}
          onClick={handleNext}
          position="absolute"
          right="1rem"
          top="50%"
          transform="translateY(-50%)"
          fontSize="1xl"
          borderRadius="100%"
          colorScheme="gray"
          zIndex="1"
        />
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        direction="vertical"
        spaceBetween={10}
        // style={{ background: "red" }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index} style={{ aspectRatio: "1" }}>
            <Image
              src={imageUrl.url}
              alt={`Thumb ${index + 1}`}
              h="100%"
              w="100%"
              opacity={index === activeIndex ? 1 : 0.3}
              boxShadow={
                index === activeIndex
                  ? "0px 4px 10px rgba(0, 0, 0, 0.4)"
                  : "none"
              }
              borderRadius="0.5rem"
              cursor="pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default SlidesShow;

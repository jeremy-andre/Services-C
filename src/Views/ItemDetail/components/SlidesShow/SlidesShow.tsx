import { useState } from "react";

import { Pagination, Controller, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

import { Flex, Image } from "@chakra-ui/react";

import SwiperButtons from "./SwiperButtons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  image: {
    url: string;
  }[];
};

const SlidesShow = ({ image }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <Flex gap="1rem" h="30rem">
      <Flex h="30rem" aspectRatio={1}>
        <Swiper
          modules={[Pagination, Controller, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => `
              <span class="${className}" style="background-color: #4e7d3d;"></span>
            `,
          }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {image.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                src={imageUrl.url}
                alt={`Slide ${index + 1}`}
                h="100%"
                w="100%"
                cursor="pointer"
              />
            </SwiperSlide>
          ))}
          <SwiperButtons handlePrev={handlePrev} handleNext={handleNext} />
        </Swiper>
      </Flex>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        direction="vertical"
        spaceBetween={10}
      >
        {image.map((imageUrl, index) => (
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

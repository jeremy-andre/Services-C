// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlidesShow = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default SlidesShow;

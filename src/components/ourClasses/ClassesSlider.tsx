import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Pagination, Navigation } from "swiper/modules";
import { classesData } from "@/utils/classesData";
import ClassCard from "./ClassCard";
const ClassesSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      className="px-4"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 2,
        },
        1650: {
          slidesPerView: 3,
        },
      }}
    >
      {classesData.map((item, index) => (
        <SwiperSlide
          key={`${item.title}-${index}`}
          className="flex justify-center items-center"
        >
          <ClassCard
            title={item.title}
            image={item.image}
            description={item.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClassesSlider;

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { topics } from "@/data";
import { IdeaFeedItem } from "./IdeaFeedItem";

export const IdeaFeed = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={1.2}
      direction={"vertical"}
      loop
      centeredSlides
      style={{ width: "100%", height: "100%" }}
    >
      {topics.map((data, index) => (
        <SwiperSlide key={index}>
          <IdeaFeedItem data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

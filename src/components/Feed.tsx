import { FeedItem } from "./FeedItem";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import { topics } from "@/data";

export const Feed = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={1.2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      direction={"vertical"}
      loop
      centeredSlides
      style={{ width: "100%", height: "100%" }}
    >
      {topics.map((data, index) => (
        <SwiperSlide key={index}>
          <FeedItem data={data} nextSlide={handleNext} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

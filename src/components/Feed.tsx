import { FeedItem } from "./FeedItem";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import { topics } from "@/data";
import { Box } from "@mui/material";

export const Feed = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        ".swiper-slide": {
          opacity: 0.5,
          transition: "opacity 0.5s",
        },
        ".swiper-slide-active": {
          opacity: 1,
        },
      }}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={1.8}
        direction={"vertical"}
        loop
        style={{ width: "100%", height: "100%" }}
        mousewheel
      >
        {topics.map((data, index) => (
          <SwiperSlide key={index}>
            <FeedItem data={data} nextSlide={handleNext} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

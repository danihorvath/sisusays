import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { topics } from "@/data";
import { IdeaFeedItem } from "./IdeaFeedItem";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

export const IdeaFeed = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const params = useParams();

  const selectedTopic = topics.find((v) => v.id.toString() === params.topic);

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
      >
        {selectedTopic?.ideas?.map((data, index) => (
          <SwiperSlide key={index}>
            <IdeaFeedItem data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

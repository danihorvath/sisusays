import { FeedItem } from "./FeedItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export const topics = [
  {
    id: 1,
    title: "Making Public Transport Work for Everyone",
    description:
      "How can we improve public transportation in rural areas to ensure all Finns have access to reliable transport?",
  },
  {
    id: 2,
    title:
      "Helsinki rents are crazy expensive. How do we fix the housing crisis and make sure everyone can afford a place to live?",
    description:
      "Helsinki rents are crazy expensive. How do we fix the housing crisis and make sure everyone can afford a place to live?",
  },
  {
    id: 3,
    title: "Universal Basic Income",
    description:
      "What if everyone got free money from the government every month? Is Finland ready to try this for real?",
  },
  {
    id: 4,
    title: "Mental Health Services",
    description:
      "Mental health is a huge issue, especially for young people. How can Finland improve mental health services so everyone gets the help they need?",
  },
  {
    id: 5,
    title: "Better Internet in Rural Finland",
    description:
      "People in small towns are stuck with slow internet, while the cities get all the fast connections. How do we make sure everyone has good internet, no matter where they live?",
  },
];

export const Feed = () => {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      direction={"vertical"}
      style={{ height: "100%" }}
    >
      {topics.map((data, index) => (
        <SwiperSlide key={index}>
          <FeedItem data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

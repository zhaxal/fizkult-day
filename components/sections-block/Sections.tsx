import Heading from "@components/ui/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Container } from "@chakra-ui/react";
import "swiper/css";

import dynamic from "next/dynamic";
const SectionCard = dynamic(() => import('./SectionCard'), {
    ssr: false
  })

const Sections = () => {
  const array = [1, 2, 3, 5, 6];
  return (
    <>
      <Heading text="занятия и секции" />
      <Container mb="80px" maxW="1110px">
        <Swiper
          style={{ overflow: "visible" }}
          modules={[FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={48}
          freeMode={true}
        >
          {array.map((i) => {
            return (
              <SwiperSlide style={{ width: "1110px" }} key={i}>
                <SectionCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Sections;

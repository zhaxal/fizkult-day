import Heading from "@components/ui/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import "swiper/css";

import dynamic from "next/dynamic";
import SectionCardMobile from "./SectionCardMobile";
const SectionCard = dynamic(() => import('./SectionCard'), {
  ssr: false
})

const Sections = () => {
  const array = [1, 2, 3, 5, 6];
  const variant = useBreakpointValue({ md: true });
  let width: string;
  let spaceBetween: number;
  let mb: string;
  if (variant) {
    width = "1100px"
    spaceBetween = 48
    mb = "80px"
  }
  else {
    width = "320px"
    spaceBetween = 16
    mb = "32px"
  }

  return (
    <>
      <Heading text="занятия и секции" isMobile={!variant} />
      <Container mb="80px" maxW="1110px">
        <Swiper
          style={{ overflow: "visible" }}
          modules={[FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={spaceBetween}
          freeMode={true}
        >
          {array.map((i) => {
            return (
              <SwiperSlide style={{ width: width }} key={i}>
                {variant ?
                  (
                    <SectionCard
                      date={"13 Августа"}
                      title={"Секция скейтбординга"}
                      desc={`Описание секции в несколько строк \n Описание секции в несколько строк \n ссылка на правила`}
                      image={"/images/skate_guy.png"} />
                  )
                  :
                  (
                    <SectionCardMobile
                      date={"13 Августа"}
                      title={`Секция \n скейтбординга`}
                      desc={`Описание секции в несколько строк \n Описание секции в несколько строк \n ссылка на правила`}
                      image={"/images/skate_guy.png"} />       
                  )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Sections;

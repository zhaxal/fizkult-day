import Heading from "@components/ui/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import "swiper/css";

import dynamic from "next/dynamic";
import SectionCardMobile from "./SectionCardMobile";
import { usePage } from "@contexts/page-context";
const SectionCard = dynamic(() => import("./SectionCard"), {
  ssr: false,
});

const Sections = () => {
  const array = [1, 2, 3, 5, 6];
  const { sections } = usePage();
  const variant = useBreakpointValue({ md: true });
  let width: string;
  let spaceBetween: number;
  let mb: string;
  if (variant) {
    width = "1100px";
    spaceBetween = 48;
    mb = "80px";
  } else {
    width = "320px";
    spaceBetween = 16;
    mb = "32px";
  }

  return (
    <>
      <Heading text="МОСГОРСПОРТ" isMobile={!variant} />
      <Container mb="80px" maxW="1110px">
        <Swiper
          style={{ overflow: "visible" }}
          modules={[FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={spaceBetween}
          freeMode={true}
        >
          {sections.map((sect, i) => {
            const id = sect._id.toString();

            return (
              <SwiperSlide style={{ width: width }} key={i}>
                {variant ? (
                  <SectionCard
                    eventId={id}
                    date={sect.date}
                    title={sect.title}
                    desc={sect.desc}
                    image={sect.image}
                    type={"section"}
                  />
                ) : (
                  <SectionCardMobile
                    eventId={id}
                    date={sect.date}
                    title={sect.title}
                    desc={sect.desc}
                    image={sect.image}
                    type={"section"}
                  />
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

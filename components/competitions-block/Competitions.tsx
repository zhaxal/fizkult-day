import Heading from "@components/ui/Heading";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import dynamic from "next/dynamic";
const CompetitionCard = dynamic(() => import("./CompetitionCard"), {
  ssr: false,
});

const Competitions = () => {
  const array = [1, 2, 3, 5, 6];
  const variant = useBreakpointValue({ md: true })

  return (
    <>
      <Heading text="соревнования и конкурсы" isMobile={!variant} />
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
                <CompetitionCard
                  date="13 АВГУСТА"
                  title="Moscow\nFitness Cup"
                  desc="Открытый московский турнир в абсолютных категориях номинаций:\nПляжный бодибилдинг,\nФитнес Бикини,\nФит-модель"
                  image="/images/guy.png"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Competitions;

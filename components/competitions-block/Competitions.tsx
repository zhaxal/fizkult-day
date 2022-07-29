import Heading from "@components/ui/Heading";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import dynamic from "next/dynamic";
import CompetitionMobileCard from "./CompetitionMobileCard";
const CompetitionCard = dynamic(() => import("./CompetitionCard"), {
  ssr: false,
});

const Competitions = () => {
  const array = [1, 2, 3, 5, 6];
  const variant = useBreakpointValue({ md: true })
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
      <Heading text="соревнования и конкурсы" isMobile={!variant} />
      <Container mb={mb} maxW="1110px">
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
                  (<CompetitionCard
                    date="13 АВГУСТА"
                    title={`Moscow \n Fitness Cup`}
                    desc={`Открытый московский турнир в абсолютных категориях номинаций:\nПляжный бодибилдинг,\nФитнес Бикини,\nФит-модель`}
                    image="/images/guy.png" />)
                  :
                  (<CompetitionMobileCard
                    date="13 АВГУСТА"
                    title={`Moscow \n Fitness Cup`}
                    desc={`Открытый московский турнир в абсолютных категориях номинаций:\nПляжный бодибилдинг,\nФитнес Бикини,\nФит-модель`}
                    image="/images/FitnessCUP.png" />)}

              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Competitions;

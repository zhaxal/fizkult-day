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
  const compArray = [
    {
      id: 1,
      img: "/images/competitions/FitnessCUP.png",
      title: "Moscow Fitness Cup",
      desc: `Открытый московский турнир в абсолютных категориях номинаций: \n Пляжный бодибилдинг \n Фитнес Бикини, \n Фит-модель`,
    },
    {
      id: 2,
      img: "/images/competitions/FitnessCh.png",
      title: "Moscow Fitness Challenge",
      desc: `Открытый московский турнир в абсолютных категориях номинаций: \n Пляжный бодибилдинг \n Фитнес Бикини, \n Фит-модель`,
    },
    {
      id: 3,
      img: "/images/competitions/BenchpressComp.png",
      title: "открытые соревнования по жиму лёжа",
      desc: `Описание Конкурса в несколько строк ссылка на правила`,
    },
    {
      id: 4,
      img: "/images/competitions/BicepcComp.png",
      title: "открытые соревнования по подъёму на бицепс",
      desc: `Описание Конкурса в несколько строк ссылка на правила`,
    },
    {
      id: 5,
      img: "/images/competitions/BrakeDanceComp.png",
      title: "открытые соревнования по брейкингу “double dragon 5”",
      desc: `Номинации 
      2vs2 PRO 
      1vs1 PRO 
      1vs1 KIDS PRO 
      1vs1 KIDS`,
    },
    {
      id: 6,
      img: "/images/competitions/PowerPunchComp.png",
      title: "открытые соревнования по силе удара",
      desc: `Описание Конкурса в несколько строк ссылка на правила`,
    },
    {
      id: 7,
      img: "/images/competitions/ArmWrestlingComp.png",
      title: "открытые соревнования по армрестлингу",
      desc: `Описание Конкурса в несколько строк ссылка на правила`,
    },
  ];

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
      <Heading text="соревнования и конкурсы" isMobile={!variant} />
      <Container mb={mb} maxW="1110px">
        <Swiper
          style={{ overflow: "visible" }}
          modules={[FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={spaceBetween}
          freeMode={true}
        >
          {compArray.map((comp, i) => {
            return (
              <SwiperSlide style={{ width: width }} key={i}>
                {variant ? (
                  <CompetitionCard
                    date="13 АВГУСТА"
                    title={`Moscow \n Fitness Cup`}
                    desc={`Открытый московский турнир в абсолютных категориях номинаций:\nПляжный бодибилдинг,\nФитнес Бикини,\nФит-модель`}
                    image="/images/guy.png"
                  />
                ) : (
                  <CompetitionMobileCard
                    date="13 АВГУСТА"
                    title={`Moscow \n Fitness Cup`}
                    desc={`Открытый московский турнир в абсолютных категориях номинаций:\nПляжный бодибилдинг,\nФитнес Бикини,\nФит-модель`}
                    image="/images/competitions/FitnessCUP.png"
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

export default Competitions;

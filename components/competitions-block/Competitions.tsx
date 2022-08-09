import Heading from "@components/ui/Heading";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import dynamic from "next/dynamic";
import CompetitionMobileCard from "./CompetitionMobileCard";
import { usePage } from "@contexts/page-context";
import Spinner from "@components/ui/Spinner";
const CompetitionCard = dynamic(() => import("./CompetitionCard"), {
  ssr: false,
});

const Competitions = () => {
  const variant = useBreakpointValue({ md: true });
  const { competitions } = usePage();

  let width: string;
  let spaceBetween: number;
  let mb: string;

  if (variant) {
    width = "1110px";
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
          {competitions ? (
            competitions.map((comp, i) => {
              const id = comp._id.toString();

              return (
                <SwiperSlide style={{ width: width }} key={i}>
                  {variant ? (
                    <CompetitionCard
                      eventId={id}
                      type="competition"
                      formLink={comp.formLink}
                      date={comp.date}
                      title={comp.title}
                      desc={comp.desc}
                      image={comp.image}
                    />
                  ) : (
                    <CompetitionMobileCard
                      eventId={id}
                      type="competition"
                      formLink={comp.formLink}
                      date={comp.date}
                      title={comp.title}
                      desc={comp.desc}
                      image={comp.image}
                    />
                  )}
                </SwiperSlide>
              );
            })
          ) : (
            <Spinner />
          )}
        </Swiper>
      </Container>
    </>
  );
};

export default Competitions;

import Heading from "@components/ui/Heading";
import { Box, Container, Image, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import dynamic from "next/dynamic";
import CompetitionMobileCard from "./CompetitionMobileCard";
import { usePage } from "@contexts/page-context";
import Spinner from "@components/ui/Spinner";
import React from "react";
const CompetitionCard = dynamic(() => import("./CompetitionCard"), {
  ssr: false,
});

const Competitions = () => {
  const variant = useBreakpointValue({ md: true });
  const { schoolEvents } = usePage();
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLastIndex, setIsLastIndex] = React.useState(false);

  const handleChangeIndex = (index: number, lastIndex: number) => {
    setActiveIndex(index);
    if (index === 0) {
      setShowLeftArrow(false);
    } else {
      setShowLeftArrow(true);
    }
    if (lastIndex === 1) {
      setIsLastIndex(true);
      setShowRightArrow(false);
    } else {
      setIsLastIndex(false);
      setShowRightArrow(true);
    }
  };
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
      <Container mb={mb} maxW="1440px" px={0} >
        <Heading text="школьный спорт" isMobile={!variant} />
        <Box mx={variant ? "140px" : "0px"} position="relative">
          <Swiper
            style={{ overflow: "visible" }}
            modules={[Navigation]}
            navigation={variant ? {
              prevEl: ".prev-button",
              nextEl: ".next-button",
            } : false}
            slidesPerView={variant ? 1 : "auto"}
            spaceBetween={spaceBetween}
            resistance={false}
            onActiveIndexChange={(e: any) =>
              handleChangeIndex(e.activeIndex, e.progress)
            }
            onReachBeginning={() => setShowLeftArrow(false)}
            onReachEnd={() => setShowRightArrow(false)}
          >
            {schoolEvents ? (
              schoolEvents.map((events, i) => {
                const id = events._id.toString();

                return (
                  <SwiperSlide style={{ width: width }} key={i}>
                    {variant ? (
                      <CompetitionCard
                        eventId={id}
                        type="schoolEvent"
                        date={events.date}
                        title={events.title}
                        description={events.description}
                        image={events.image}
                      />
                    ) : (
                      <CompetitionMobileCard
                        eventId={id}
                        type="schoolEvent"
                        date={events.date}
                        title={events.title}
                        description={events.description}
                        image={events.image}
                      />
                    )}
                  </SwiperSlide>
                );
              })
            ) : (
              <Spinner />
            )}
          </Swiper>
          <Image
            className={"next-button"}
            src={"/images/slider/right.png"}
            sx={{
              position: "absolute",
              right: "-30px",
              top: "45%",
              maxHeight: "140px",
              zIndex: 3,
              display: variant ? "block" : "none",
            }}
          />
          <Image
            className={"prev-button"}
            src={"/images/slider/left.png"}
            sx={{
              position: "absolute",
              left: "-20px",
              top: "45%",
              maxHeight: "140px",
              zIndex: 3,
              display: variant ? "block" : "none",
            }}
          />
        </Box>

      </Container>
    </>
  );
};

export default Competitions;

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import ScheduleCard from "./ScheduleCard";
import ScheduleCardMobile from "./ScheduleCardMobile";
import { usePage } from "@contexts/page-context";
import { Box, useBreakpointValue } from "@chakra-ui/react";

const Schedule = () => {
  const { schedules } = usePage();
  const variant = useBreakpointValue({ md: true });

  let width: string;
  let spaceBetween: number;
  if (variant) {
    width = "420px";
    spaceBetween = 48;
  } else {
    width = "240px";
    spaceBetween = 16;
  }
  return (
    <Swiper
      style={{ overflow: "visible" }}
      modules={[FreeMode]}
      slidesPerView={"auto"}
      spaceBetween={spaceBetween}
      freeMode={true}
    >
      {schedules.map((schedule, i) => {
        return (
          <SwiperSlide style={{ width: width }} key={i}>
            {variant ? (
              <ScheduleCard
                type="schedule"
                time={schedule.time}
                title={schedule.title}
                desc={schedule.desc}
              />
            ) : (
              <ScheduleCardMobile
                type="schedule"
                time={schedule.time}
                title={schedule.title}
                desc={schedule.desc}
              />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Schedule;

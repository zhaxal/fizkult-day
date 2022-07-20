import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";

import ScheduleCard from "./ScheduleCard";

const Schedule = () => {
  const array = [1, 2, 3, 5, 6];

  return (
    <Swiper
      style={{ overflow: "visible" }}
      modules={[FreeMode]}
      slidesPerView={"auto"}
      spaceBetween={48}
      freeMode={true}
    >
      {array.map((i) => {
        return (
          <SwiperSlide style={{ width: "420px" }} key={i}>
            <ScheduleCard
              time="12:00"
              title="ФИТНЕС-АЭРОБИКА"
              desc="тренер «Федерации фитнес-аэробики России» дисциплины «фитнес-аэробика»"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Schedule;

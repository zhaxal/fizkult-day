import { Container, Stack, Box } from "@chakra-ui/react";
import Heading from "@components/ui/Heading";
import PerfomanceCard from "./PerfomanceCard";

const Perfomances = () => {
  return (
    <>
      <Heading text="ПОКАЗАТЕЛЬНЫЕ ВЫСТУПЛЕНИЯ" />
      <Container mb="48px" maxW="1110px">
        <Stack spacing="160px">
          <PerfomanceCard
            image="/images/velo.png"
            position="left"
            date="13 АВГУСТА"
            title="ПЛОЩАДКА московской академии велосипедного спорта"
            description="совместно с Федерацией Компьютерного спорта г. Москвы
            Посетители смогут пройти обучение  и получить первые советы от специалистов в разных играх. Будет оборудована отдельная зона VR"
          />

          <PerfomanceCard
            image="/images/velo.png"
            position="right"
            date="13 АВГУСТА"
            title="Киберспортивная площадка"
            description="На сегодняшний день ГБУ «Московская академия
          велосипедного спорта» считается одной из крупнейших и сильнейших
          спортивных школ Российской Федерации. BMX Рейс BMX Фристайл MTB"
          />

          <PerfomanceCard
            image="/images/velo.png"
            position="left"
            date="13 АВГУСТА"
            title="Киберспортивная площадка"
            description="На сегодняшний день ГБУ «Московская академия
          велосипедного спорта» считается одной из крупнейших и сильнейших
          спортивных школ Российской Федерации. BMX Рейс BMX Фристайл MTB"
          />
        </Stack>
      </Container>
    </>
  );
};

export default Perfomances;

import { Container, Stack, Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import Heading from "@components/ui/Heading";
import PerfomanceCard from "./PerfomanceCard";
import PerfomanceCardMobile from "./PerformanceCardMobile";

const Perfomances = () => {
  const variant = useBreakpointValue({ md: true });

  let mb: string;
  if (variant) {
    mb = "80px"
  }
  else {
    mb = "32px"
  }

  return (
    <>
      <Heading text="ПОКАЗАТЕЛЬНЫЕ ВЫСТУПЛЕНИЯ" isMobile={!variant} />
      <Container mb="48px" maxW="1110px">
        {variant ? (
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
        ) : (
          <VStack >
            <PerfomanceCardMobile
              image="/images/velo.png"
              position="left"
              date="13 АВГУСТА"
              title="ПЛОЩАДКА московской академии велосипедного спорта"
              description="На сегодняшний день ГБУ «Московская академия
              велосипедного спорта» считается одной из крупнейших и сильнейших
              спортивных школ Российской Федерации. BMX Рейс BMX Фристайл MTB" />
            <PerfomanceCardMobile
              image="/images/velo.png"
              position="left"
              date="13 АВГУСТА"
              title="ПЛОЩАДКА московской академии велосипедного спорта"
              description="На сегодняшний день ГБУ «Московская академия
              велосипедного спорта» считается одной из крупнейших и сильнейших
              спортивных школ Российской Федерации. BMX Рейс BMX Фристайл MTB" />
            <PerfomanceCardMobile
              image="/images/velo.png"
              position="left"
              date="13 АВГУСТА"
              title="ПЛОЩАДКА московской академии велосипедного спорта"
              description="На сегодняшний день ГБУ «Московская академия
              велосипедного спорта» считается одной из крупнейших и сильнейших
              спортивных школ Российской Федерации. BMX Рейс BMX Фристайл MTB" />
          </VStack>
        )}

      </Container>
    </>
  );
};

export default Perfomances;

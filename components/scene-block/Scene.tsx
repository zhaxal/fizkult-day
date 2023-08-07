import {
  Container,
  Stack,
  useBreakpointValue,
  Text,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";

import { FC } from "react";
import Heading from "@components/ui/Heading";
import { newlineText } from "@utils/newline";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { WithId } from "mongodb";
import { Schedule } from "@mongo/models/events/schedule";
import TablePanel from "@components/ui/TablePanel";

interface Props {
  schedules?: WithId<Schedule>[];
}



// const schedule = [
//   {
//     time: "11:00 - 10:02",
//     title: "Приветствие ведущих",
//   },
//   {
//     time: "11:02 - 11:25",
//     title: "Парад команд",
//   },
//   {
//     time: "11:25 - 11:30",
//     title: "Шоу-номер открытия",
//   },
//   {
//     time: "11:30 - 11:40",
//     title: "Приветствие официальных лиц",
//   },
//   {
//     time: "11:40 - 11:45",
//     title: "Гимн Российской Федерации",
//   },
//   {
//     time: "11:45 - 11:55",
//     title:
//       'Церемония награждения победителей и призеров городского смотра-конкурса "Московский двор - спортивный двор',
//   },
//   {
//     time: "11:55 - 12:00",
//     title: "Завершение Церемонии открытия",
//   },
//   {
//     time: "12:00 - 12:20",
//     title: "Тренировка с Аделиной Сотниковой",
//   },
//   {
//     time: "12:20 - 14:40",
//     title: "Moscow Fitness Cup",
//   },
//   {
//     time: "14:45 - 14:55",
//     title: "Выступление Лизы Матрешки",
//   },
//   {
//     time: "14:55 - 15:30",
//     title: "Мастер-класс от Джаз Дэнс",
//   },
//   {
//     time: "15:30 - 15:40",
//     title: "Выступление Idon Care",
//   },
//   {
//     time: "15:40 - 16:10",
//     title: "МСР / Мосгорспорт",
//   },
//   {
//     time: "16:10 - 18:10",
//     title: "Moscow Fitness Cup",
//   },
//   {
//     time: "18:10 - 18:20",
//     title: "Выступление Павла Пикалова",
//   },
// ];

const images = [
  "/images/scene/моспродюссер.png",
  "/images/scene/ЛизаМатрёшка.jpg",
  "/images/scene/IdonCare.jpg",
  "/images/scene/ПавелПикалов.jpg",
];

const Scene = ({ schedules }: Props) => {
  const variant = useBreakpointValue({ md: true });

  return (
    <Container maxW="1440px" px={variant ? 0 : "10px"}>
      <Heading text="ГЛАВНАЯ СЦЕНА" isMobile={!variant} />

      <Stack mb="32px" pt={"24px"} alignItems="center" direction="column" spacing="32px">
        <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
          ПРОГРАММА
        </Text>

        <Stack width="100%" maxW="900px" spacing="8px" direction="column">
          {schedules?.map((item, index) => (
            <TablePanel
              key={index}
              time={item.startDate + " - " + item.endDate}
              title={item.title}
              variant={variant}
            ></TablePanel>
          ))}
        </Stack>
      </Stack>

      <Stack
        mb="32px"
        direction={variant ? "row" : "column"}
        mx={variant ? "140px" : "0px"}
        spacing="30px"
      >
        <Image
          sx={{
            borderRadius: 32,
          }}
          maxH={variant ? "540px" : "480px"}
          src={"/images/scene/adelina.png"}
          alt={"adelina"}
        />
        <Stack direction={"column"} spacing={"40px"}>
          <Text variant="date">12 АВГУСТА</Text>

          <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
            тренировка
          </Text>
          <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
            аделиной сотниковой
          </Text>
          <Box>
            {/* i need indent on ul */}
            <Text
              as="ul"
              variant={variant ? "body.bold" : "body.bold.mobile"}
              sx={{
                listStylePosition: "inside",
                paddingLeft: "20px",
              }}
            >
              <li>
                Первая в российской истории олимпийская чемпионка (2014) в
                женском одиночном катании в индивидуальном зачёте.
              </li>
              <li>Двукратный серебряный призёр чемпионатов Европы.</li>
              <li>
                Чемпионка мира среди юниоров, четырёхкратная чемпионка России
              </li>
              <li>Cеребряный медалист первых юношеских Олимпийских игр.</li>
              <li>Заслуженный мастер спорта России</li>
            </Text>
          </Box>
        </Stack>
      </Stack>

      <Stack
        mb="80px"
        direction={variant ? "row" : "column"}
        mx={variant ? "140px" : "0px"}
        spacing="30px"
      >
        <Stack direction={"column"} spacing={"40px"}>
          <Text variant="date">12 АВГУСТА</Text>
          <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
            ВЫСТУПЛЕНИЯ АРТИСТОВ
          </Text>
          <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
            ПРОЕКТов #моспродюсер
          </Text>
          <Box>
            {/* i need indent on ul */}
            <Text as="p" variant={variant ? "body.bold" : "body.bold.mobile"}>
              Проекты #Моспродюсер – это социальный лифт, где равные возможности
              представить свой талант, найти новую аудиторию, улучшить качество
              материала предоставляются всем независимо от того, новичок ты или
              уже заработал себе имя.
            </Text>
            <Text as="p" variant={variant ? "body.bold" : "body.bold.mobile"}>
              Для вас на сцене выступят:
            </Text>
            <Text
              as="ol"
              variant={variant ? "body.bold" : "body.bold.mobile"}
              sx={{
                listStylePosition: "inside",
                paddingLeft: "10px",
              }}
            >
              <li>Лиза Матрёшка</li>
              <li>Idon Care</li>
              <li>Павел Пикалов</li>
            </Text>
          </Box>
        </Stack>
        <Box sx={{ width: variant ? "540px" : "100%" }}>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    borderRadius: 32,
                    width: variant ? '540px' : '100%',
                    height: 0,
                    paddingBottom: '100%', // Sets the height equal to the width
                    position: 'relative', // Needed for the correct positioning of the Image
                  }}
                >
                  <Image
                    sx={{
                      borderRadius: 32,
                      position: 'absolute', // Absolute positioning inside the Box
                      width: '100%', // Full width of the container
                      height: '100%', // Full height of the container
                    }}
                    src={image}
                    alt={image + '-' + index}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      <Stack
        mb="32px"
        direction={variant ? "row" : "column"}
        mx={variant ? "140px" : "0px"}
        spacing="30px"
        w={"100%"}
      >
        {variant &&
          <Stack direction={"column"} justifyContent="center" alignItems={"center"} maxW={"540px"} spacing={"30px"}>
            <Image
              sx={{
                borderRadius: 32,
              }}
              src={"/images/scene/dancegirl.png"}
              alt={"dancegirl"}
            />
            <Button
              variant={"festivale.register"}
              maxW={"288px"}
              minH={"97px"}
              onClick={() => {
                window.open(
                  "https://mosgorsport.timepad.ru/event/2528777/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Text
                sx={{
                  fontSize: "24px",
                  color: "white",
                  fontFamily: "Gotham Pro Light",
                }}
              >
                РЕГИСТРАЦИЯ
              </Text>
            </Button>
          </Stack>
        }


        <Stack direction={"column"} maxW={variant ? "540px" : "480px"} spacing={"40px"}>
          <Text variant="date">12 АВГУСТА</Text>
          {variant ? (<>          <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
            Танцевальная тренировка
          </Text>
            <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
              от проекта
            </Text>
            <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
              «Мой спортивный район»
            </Text></>) : (
            <>
              <Text variant={"heading.blue.mobile"} sx={{ lineHeight: "30px" }}>
                Танцевальная тренировка от проекта «Мой спортивный район»
              </Text>
            </>
          )}


          <Box>
            <Text
              variant={variant ? "body.bold" : "body.bold.mobile"}
            >
              Энергичная танцевальная тренировка с элементами флешмоба объединит сразу три направления: зумбу, дэнс-микс и фитрок
            </Text>
            <Text
              variant={variant ? "body.bold" : "body.bold.mobile"}
            >
              Занятие начнется на Главной сцене в 15.40
            </Text>
            <Text
              variant={variant ? "body.bold" : "body.bold.mobile"}
            >
              Тренировка подойдет для всех желающих независимо от уровня подготовки
            </Text>
            <Text
              variant={variant ? "body.bold" : "body.bold.mobile"}
            >
              Проведут занятие одни из самых популярных тренеров проекта:
            </Text>
            <Text
              as="ul"
              variant={variant ? "body.bold" : "body.bold.mobile"}
              sx={{
                listStylePosition: "inside",
                paddingLeft: "20px",
              }}
            >
              <li>
                Елена Кучма  — сертифицированный фитнес-инструктор, лицензированный инструктор LDFA (Latin Dance Fitness Alliance), многократный участник Всероссийского Танцевального Фитнес-Фестиваля, победитель конкурса DDX Dance Battle.
              </li>
              <li>Ника Устьянова —  инструктор Zumba Fitness и Stretching с 2020 г., учится направлению Bachata Lady style.</li>
              <li>Мария Рагулина — практикующий инструктор по зумбе и функциональной тренировке fitrock, призер DDX Dance battle 3.0 и победитель DDX Dance battle 4.0.
              </li>
            </Text>
          </Box>
        </Stack>

        {variant ??
          <Stack direction={"column"} justifyContent="center" alignItems={"center"} maxW={"540px"} spacing={"30px"}>
            <Image
              sx={{
                borderRadius: 32,
              }}
              src={"/images/scene/dancegirl.png"}
              alt={"dancegirl"}
            />
            <Button
              variant={"festivale.register"}
              maxW={"255px"}
              minH={"64px"}
              onClick={() => {
                window.open(
                  "https://mosgorsport.timepad.ru/event/2528777/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Text
                sx={{
                  fontSize: "16px",
                  color: "white",
                  fontFamily: "Gotham Pro Light",
                }}
              >
                РЕГИСТРАЦИЯ
              </Text>
            </Button>
          </Stack>
        }
      </Stack>
    </Container>
  );
};

export default Scene;

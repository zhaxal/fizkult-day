

import {
  useBreakpointValue,
  Box,
  Stack,
  Container,
  Image,
} from "@chakra-ui/react";
import Competitions from "@components/competitions-block/Competitions";
import Cover from "@components/cover-block/Cover";
import Description from "@components/description-block/Description";
import MainScene from "@components/main-scene-block/MainScene";
import Partners from "@components/partners-block/Partners";
import Performances from "@components/perfomances-block/Performances";
import Sections from "@components/sections-block/Sections";
import Divider from "@components/ui/Divider";
import Footer from "@components/ui/Footer";
import DescriptionMobile from "@components/description-block/DescriptionMobile";
import type { NextPage } from "next";
import { PageProvider } from "@contexts/page-context";
import { Schedule } from "@mongo/models/events/schedule";
import { fetcher } from "@utils/fetcher";
import { WithId } from "mongodb";
import useSWR from "swr";
import { Competition } from "@mongo/models/events/competition";
import { Performance } from "@mongo/models/events/performance";
import { Section } from "@mongo/models/events/section";
import Gallery from "@components/gallery-block/Gallery";
import { SchoolEvent } from "@mongo/models/events/schoolevent";
import Festivale from "@components/festivale-block/Festivale";
import Street from "@components/street-block/Street";

const Home: NextPage = () => {
  const variant = useBreakpointValue({ md: true });

  const { data: schoolEvents } = useSWR<WithId<SchoolEvent>[]>(
    `/api/events?type=schoolEvent`,
    fetcher
  );


  return (
    <PageProvider schoolEvents={schoolEvents}>
      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      >
        <Cover />
        {variant ? <Description /> : <DescriptionMobile />}
        <Divider />
        <MainScene />
        <Festivale />
        <Competitions />
        <Street />
        <Partners />
        <Footer />
        {/* <Image
          sx={{ height: "90px" }}
          src={variant ? "/images/Bottom.png" : "/images/BottomMobile.png"}
        /> */}
        {/* <Container maxW="1110px">
          <Stack
            spacing="16px"
            height="100px"
            alignItems="center"
            direction="row"
          >
            <Image
              height="50px"
              sx={{ maxW: variant ? "100%" : "30%" }}
              src="/images/department.svg"
              onClick={() => window.open("https://www.mos.ru/moskomsport/")} 
              cursor={"pointer"}
              alt="department"
            />
            <Image
              height="50px"
              sx={{ maxW: variant ? "100%" : "30%" }}
              src="/images/mossport.svg"
              onClick={() => window.open("https://moscow.sport")} 
              cursor={"pointer"}
              alt="mossport"
            />
            <Image
              height="50px"
              sx={{ maxW: variant ? "100%" : "30%" }}
              src="/images/100years.svg"
              onClick={() => window.open("https://100.moscow.sport")} 
              cursor={"pointer"}
              alt="100years"
            />

          </Stack>
        </Container> */}

        {/* <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Сайт в разработке</AlertTitle>
      </Alert> */}
      </Box>
    </PageProvider>
  );
};

export default Home;

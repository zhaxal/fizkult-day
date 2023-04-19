

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

const Home: NextPage = () => {
  const variant = useBreakpointValue({ md: true });
  const { data: schedules } = useSWR<WithId<Schedule>[]>(
    `/api/events?type=schedule`,
    fetcher
  );

  const { data: competitions } = useSWR<WithId<Competition>[]>(
    `/api/events?type=competition`,
    fetcher
  );

  const { data: performances } = useSWR<WithId<Performance>[]>(
    `/api/events?type=performance`,
    fetcher
  );

  const { data: sections } = useSWR<WithId<Section>[]>(
    `/api/events?type=section`,
    fetcher
  );

  return (
    <PageProvider
      sections={sections}
      performances={performances}
      competitions={competitions}
      schedules={schedules}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      >
        <Cover />

        {variant ? <Description /> : <DescriptionMobile />}
        {/* <Divider />
        <MainScene />
        <Competitions />
        <Performances />
        <Sections />
        <Gallery />
        <Partners />
        <Footer /> */}
        <Image
          sx={{ height: "90px" }}
          src={variant ? "/images/Bottom.png" : "/images/BottomMobile.png"}
        />
        <Container maxW="1110px">
          <Stack
            spacing="40px"
            height="100px"
            alignItems="center"
            direction="row"
          >
            <Image
              height="50px"
              sx={{ maxW: variant ? "100%" : "35%" }}
              src="/images/department.svg"
              alt="department"
            />
            <Image
              height="50px"
              sx={{ maxW: variant ? "100%" : "40%" }}
              src="/images/mossport.svg"
              alt="mossport"
            />
          </Stack>
        </Container>

        {/* <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Сайт в разработке</AlertTitle>
      </Alert> */}
      </Box>
    </PageProvider>
  );
};

export default Home;

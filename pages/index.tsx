import {
  Alert,
  AlertIcon,
  AlertTitle,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import Competitions from "@components/competitions-block/Competitions";
import Cover from "@components/cover-block/Cover";
import Description from "@components/description-block/Description";
import MainScene from "@components/main-scene-block/MainScene";
import Partners from "@components/partners-block/Partners";
import Perfomances from "@components/perfomances-block/Perfomances";
import Sections from "@components/sections-block/Sections";
import Divider from "@components/ui/Divider";
import Footer from "@components/ui/Footer";
import Title from "@components/ui/Title";
import DescriptionMobile from "@components/description-block/DescriptionMobile";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const variant = useBreakpointValue({ md: true });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Cover />
      {variant ? <Description /> : <DescriptionMobile />}
      <Divider />
      {variant ? null : (<Title title="для вас мы подготовили" />)}
      {/* <MainScene /> */}
      <Competitions />
      <Perfomances />
      <Sections />
      <Partners />
      <Footer />
      {/* <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Сайт в разработке</AlertTitle>
      </Alert> */}
    </Box>
  );
};

export default Home;

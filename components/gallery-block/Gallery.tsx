import {
  useBreakpointValue,
  Container,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import Heading from "@components/ui/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

const Gallery = () => {
  const variant = useBreakpointValue({ md: true });

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
      <Heading text="Фото" isMobile={!variant} />
      <Container mb={mb} maxW="1110px">
        <Swiper
          style={{ overflow: "visible" }}
          modules={[FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={spaceBetween}
          freeMode={true}
        >
          <SwiperSlide style={{ width: width }}>
            {variant ? (
              <SimpleGrid columns={3} spacing={"10px"}>
                <Image src={"/images/ex1.jpg"} />
                <Image src={"/images/ex1.jpg"} />
                <Image src={"/images/ex1.jpg"} />
                <Image src={"/images/ex1.jpg"} />
                <Image src={"/images/ex1.jpg"} />
                <Image src={"/images/ex1.jpg"} />
              </SimpleGrid>
            ) : null}
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default Gallery;

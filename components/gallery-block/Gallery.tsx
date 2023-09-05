import {
  useBreakpointValue,
  Container,
  SimpleGrid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import Heading from "@components/ui/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Gallery = () => {
  const variant = useBreakpointValue({ md: true });
  const [url, setUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);

  let width: string;
  let spaceBetween: number;
  let mb: string;

  if (variant) {
    width = "1110px";
    spaceBetween = 48;
    mb = "80px";
  } else {
    width = "100%";
    spaceBetween = 16;
    mb = "32px";
  }

  const images = [
    "https://i.ibb.co/4FxDYyY/UVA-4586.jpg",
    "https://i.ibb.co/5Td9bpp/UVA-4607.jpg",
    "https://i.ibb.co/HByQFzy/UVA-4608.jpg",
    "https://i.ibb.co/frbxp3L/UVA-4610.jpg",
    "https://i.ibb.co/bFPKXKx/UVA-4621.jpg",
    "https://i.ibb.co/xHy7Ng4/UVA-4663.jpg",
    "https://i.ibb.co/q0J9ysS/UVA-4670.jpg",
    "https://i.ibb.co/94y2KtP/UVA-4682.jpg",
    "https://i.ibb.co/W2sHmtc/UVA-4703.jpg",
    "https://i.ibb.co/QdypnLh/UVA-4709.jpg",
    "https://i.ibb.co/CvN7sMt/UVA-4723.jpg",
    "https://i.ibb.co/YkRzcVP/UVA-4750.jpg",
    "https://i.ibb.co/HtbhXCR/UVA-4763.jpg",
    "https://i.ibb.co/Tqsc65x/UVA-4776.jpg",
    "https://i.ibb.co/5FJh856/UVA-4792.jpg",
    "https://i.ibb.co/S0bPdsw/UVA-4813.jpg",
    "https://i.ibb.co/1ZdkxfX/UVA-4826.jpg",
    "https://i.ibb.co/k12wgPG/UVA-4832.jpg",
    "https://i.ibb.co/7vbXQcr/UVA-4845.jpg",
    "https://i.ibb.co/mvj1X7t/UVA-4866.jpg",
    "https://i.ibb.co/3pmwtHJ/UVA-4900.jpg",
    "https://i.ibb.co/ZH9dZYs/UVA-4946.jpg",
    "https://i.ibb.co/ScRhsYr/UVA-4959.jpg",
    "https://i.ibb.co/VqG4Sv9/UVA-4965.jpg",
    "https://i.ibb.co/BgCjdd8/UVA-4972.jpg",
    "https://i.ibb.co/yXnf3Vw/UVA-4986.jpg",
    "https://i.ibb.co/J7r6XKg/UVA-4993.jpg",
    "https://i.ibb.co/qWS4kCk/UVA-5007.jpg",
    "https://i.ibb.co/TH8XCjm/UVA-5067.jpg",
    "https://i.ibb.co/6gvH2pL/UVA-5076.jpg",
    "https://i.ibb.co/2F1bkHc/UVA-5104.jpg",
  ];

  const handleUrl = (item: string) => {
    setOpenModal(true);
    setUrl(`${item}`)
  }


  function RenderGallery() {
    const chunkSize = 6;
    let slides = [];

    for (let i = 0; i < images.length; i += chunkSize) {
      const chunk = images.slice(i, i + chunkSize);
      slides.push(
        (variant ?
          (
            <SwiperSlide style={{ width: width }} key={i}>
              <SimpleGrid columns={3} spacing={"2px"} h="100%" >
                {chunk.map((item, i) => (
                  <Image
                    key={i}
                    src={`${item}`}
                    alt={"item-" + i}
                    w="full"
                    objectFit={"cover"}
                    loading="lazy"
                    h="300px"
                    onClick={() => handleUrl(item)}
                  />
                ))}
              </SimpleGrid>
            </SwiperSlide>
          ) :
          (
            <SwiperSlide style={{ width: width }} key={i}>
              <SimpleGrid columns={2} spacing={"2px"} h="100%" >
                {chunk.map((item, i) => (
                  <Image
                    key={i}
                    src={`${item}`}
                    alt={"item-" + i}
                    w="full"
                    objectFit={"cover"}
                    h="200px"
                    onClick={() => handleUrl(item)}
                  />
                ))}
              </SimpleGrid>
            </SwiperSlide>
          ))

      );
    }

    return (
      <Swiper
        style={{ overflow: "visible" }}
        modules={[Navigation]}
        navigation={true}
        slidesPerView={variant ? 1 : "auto"}
        spaceBetween={spaceBetween}
      >
        {slides}
      </Swiper>
    );
  }


  return (
    <>
      <Container mb={"96px"} maxW="1440px" px={0}>
        <Heading text="Галерея" isMobile={!variant} />
        <RenderGallery />
      </Container>
      <Modal size="6xl" isOpen={openModal} onClose={() => setOpenModal(!openModal)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton bgColor={"#E93734"} color="white" />
          <ModalBody p={0}>
            <Image src={url} alt={`item-${url}`} w={"100%"} h="100%" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Gallery;

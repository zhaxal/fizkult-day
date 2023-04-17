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
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
  ];

  const handleUrl = (item: string) => {
    setOpenModal(true);
    setUrl(`/images/gallery/${item}`)
  }


  function RenderGallery() {
    const chunkSize = 6;
    let slides = [];

    for (let i = 0; i < images.length; i += chunkSize) {
      const chunk = images.slice(i, i + chunkSize);
      slides.push(
        (variant ?
          (
            <>
              <SwiperSlide style={{ width: width }} key={i}>
                <SimpleGrid columns={3} spacing={"2px"} h="100%" >
                  {chunk.map((item, i) => (
                    <Image
                      key={i}
                      src={`/images/gallery/${item}`}
                      alt={"item-" + i}
                      w="full"
                      objectFit={"cover"}
                      h="300px"
                      onClick={() => handleUrl(item)}
                    />
                  ))}
                </SimpleGrid>
              </SwiperSlide>
            </>
          ) :
          (
            <>
              <SwiperSlide style={{ width: width }} key={i}>
                <SimpleGrid columns={2} spacing={"2px"} h="100%" >
                  {chunk.map((item, i) => (
                    <Image
                      key={i}
                      src={`/images/gallery/${item}`}
                      alt={"item-" + i}
                      w="full"
                      objectFit={"cover"}
                      h="200px"
                      onClick={() => handleUrl(item)}
                    />
                  ))}
                </SimpleGrid>
              </SwiperSlide>
            </>
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
      <Heading text="Фото" isMobile={!variant} />
      <Container mb={mb} maxW="1110px">
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

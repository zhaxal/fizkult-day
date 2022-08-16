import {
  useBreakpointValue,
  Container,
  SimpleGrid,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import Heading from "@components/ui/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Gallery = () => {
  const variant = useBreakpointValue({ md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    {
      id: 1,
      image:
        "https://downloader.disk.yandex.ru/preview/6b6692286dbb7aa0930643fa1257164711aaf48f759a5f243fe3adfba99e3c62/62fbf481/JsJA-5ysdgC2R-bBNxmZw0zfHlBAnkUSykLWV8B1rdBFmGxMi-5P0VHxZJOhktaAHhnH2OjqhSf42hz3JbpXyw%3D%3D?uid=0&filename=PIC_0007.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 2,
      image:
        "https://downloader.disk.yandex.ru/preview/b587fcb92ae9dff6d20b7c0d923d43c2e2c6b78a0a61b11e11065a2d078f5645/62fbf481/GPNfgM80NnuEeveDokb3SIo9XhF9mC7vMuziqWws2lePPiNJts9wglhoCRFXTvyAqzL052pXdnhIqKqdnTuU2A%3D%3D?uid=0&filename=PIC_0008.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 3,
      image:
        "https://downloader.disk.yandex.ru/preview/989a7480bd665fdd05e0de4ef302ddfb0444e4bd611c34510ccd320d5324a179/62fbf481/dBOg63gyF4I7dvPIS8TzTEzfHlBAnkUSykLWV8B1rdBGV1sVQGVOCsSfXduHIBujgi8AekOH-qi5HXDtlp2-1Q%3D%3D?uid=0&filename=PIC_0010.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 4,
      image:
        "https://downloader.disk.yandex.ru/preview/f5ce41db1aa4c07570678654d426beb35a77cce7509d43f828e8d6de018648de/62fbf481/4xik_M_OCox3n6-Cx7MknkzfHlBAnkUSykLWV8B1rdBTSlWcbtG8lGLwCEUQQSduG9uvSWXcEfHf0NbXQ0L6_g%3D%3D?uid=0&filename=PIC_0012.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 5,
      image:
        "https://downloader.disk.yandex.ru/preview/248706895f158570eb1887e7e5eb1ce696db68d4425e270fae925e3c5cdd87bd/62fbf481/pHtMr7LSBvhg1669gDluS7bU0WhUQpNx_r_rPxgozMjjOBCoU7fV3B7Q7-SJLarmBwsjfWepiLRj_HyO-brocA%3D%3D?uid=0&filename=PIC_0015.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 6,
      image:
        "https://downloader.disk.yandex.ru/preview/54caf46c6af4d5c7eb1cc5616949a8bd2d6efbea021813b0c0ac148cf0c75868/62fbf481/mLQvW4gQtJb0Q0_R5tNCy7bU0WhUQpNx_r_rPxgozMi9eYIMJeChcsBkDiAkpQr3vmy1RcYeLeZ7-f5rdXs2WQ%3D%3D?uid=0&filename=PIC_0017.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 7,
      image:
        "https://downloader.disk.yandex.ru/preview/81313051c2d94874b0ad616efb314cc0ab79a8c4c26b286bdf920ccff1a55b97/62fbf481/VLtw30dt53syTfBjzEK8H2n46_xrIAWa2UI1O_lmELzzRXgEUK_H-AqiM1frSRmGCy2TkbozGGlWqn1XdbffjQ%3D%3D?uid=0&filename=PIC_0021.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 8,
      image:
        "https://downloader.disk.yandex.ru/preview/ec2c2fdd9376cdae03d813798d4dd7a552400d020af603c893205003e097564d/62fbf481/3kCFd8TwDpjql3OnR4fpaeUOZ3f5r30aNrTZ3n9fyRKjPyW9o9BZml0W2ZjVYWShY7ZtEqTfmkrXq9M-J4DiAw%3D%3D?uid=0&filename=PIC_0022.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 9,
      image:
        "https://downloader.disk.yandex.ru/preview/49bae1f2a89eb26cb41ae8725d98308208df24297120767d86735a379c24c268/62fbf481/5yNsottnSKg_D_KJEXtLAErAMMuI_O6UEcKj-NY-RFWE_hh4Yma2psT4JgHMS_bVn_WuTfcLH88sBl-uHbCwAQ%3D%3D?uid=0&filename=PIC_0026.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 10,
      image:
        "https://downloader.disk.yandex.ru/preview/d62d447f3dd16f35aa26590648c98b81a4dacd4a7ea23cb76b41eeb632c3bc6a/62fbf481/nnR3fEsvC3SdqZEYEVGp_mPo5aLpAFncbBbdT98KJoRW0tQLPp081TrwYiHEvW7cECpsQgssap7geAabFxs-xg%3D%3D?uid=0&filename=PIC_0034.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 11,
      image:
        "https://downloader.disk.yandex.ru/preview/336e4cdb93317f14717c35545bdb460d8b82e39ea6756e5e3cf370b8963cd449/62fbf481/tvathPRLZtSsf-H79w1tdI30PnG8sbw9NrcPLEnAMFd3mPQslf-3Df4gu3rorZh0bZk51wPCJ_3Ia8qrmArWFA%3D%3D?uid=0&filename=PIC_0037.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 12,
      image:
        "https://downloader.disk.yandex.ru/preview/67aa996e7f7c8fa26c50461f6636fcafdc78dfa9191d3b9d6761fa0e5783225a/62fbf481/yUNYgSDUVlLSAdDelbrZFabY_7HJQX9YcfuaDPHmbjGHnp-wPdc75rc_TAEQ7JMUH37VgX621ykx6sJEB4eeOA%3D%3D?uid=0&filename=PIC_0047.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 13,
      image:
        "https://downloader.disk.yandex.ru/preview/9c8e06669f6f0f13bdb026c4dcbddcb0637905945c8ab5edc556fe033fff2293/62fbf481/7SqbrIpxYruCgPjQsML5n7MY6_pSuJzc0oMyFLDF6i__WgIPt94xjo7lP3rfcQ1ACeouS1tmYLDRUuVAITg8lA%3D%3D?uid=0&filename=PIC_0049.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 14,
      image:
        "https://downloader.disk.yandex.ru/preview/b1a172db2f59b5cd7154a08bf07888e6818b4b5f69c72e9504fe0ebd054ec1e9/62fbf481/9QjTKqszuocrWEXmDUQD5rMY6_pSuJzc0oMyFLDF6i_RQnOS035lqua8aNZQWifIBz55_C98PAJB7fj2-TungA%3D%3D?uid=0&filename=PIC_0050.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 15,
      image:
        "https://downloader.disk.yandex.ru/preview/2727caf3c2f3bff426dbd172dd31518c70bf2b145a0009dce10a0cc7a8741627/62fbf483/2AvevMSAs7bevu2VRvk5wSvtHcLOs7tiRFWHaM4rP8zSxVkO3AQM8WzO6Fi71utg5Vewk0y32aRpDIBHCrPZwA%3D%3D?uid=0&filename=PIC_0058.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 16,
      image:
        "https://downloader.disk.yandex.ru/preview/cd621a8d0729ba80398262de026e00e9c6dd2781506dfbcb63fd5ab2839d0020/62fbf483/hen-AxA_Yy8R0GSsqs1uXvEbhvWG2A4_kcy51Oeycq3bk4n-6fcNSpfKgHDBEl65WPPFfY9FWeviWg_XFFIgHw%3D%3D?uid=0&filename=PIC_0061.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 17,
      image:
        "https://downloader.disk.yandex.ru/preview/aa8f55110ab39a6411541206cb05e856bc8ea7208443881ff0d9c43595b3de3c/62fbf483/8DCFYXH9VrIyYyDkq2TGo_EbhvWG2A4_kcy51Oeycq1udxOCpnEYJgEtRx7lwRR6lq8bhL26OSLKCXTRfjhEgg%3D%3D?uid=0&filename=PIC_0065.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 18,
      image:
        "https://downloader.disk.yandex.ru/preview/1a13968484764fc4ebbfe0513a988e9b93682c3f33449234de09d06b834707ed/62fbf483/gFboi_kSI_pDiZJzKfRdyJXfwg_6yothcO4PfebjIJqROjg0YTXFbyz4MGWmz-xPoDA0RzdOv_HjcmYGDwNUNg%3D%3D?uid=0&filename=PIC_0091.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 19,
      image:
        "https://downloader.disk.yandex.ru/preview/5ba7bd2c46a16321c69d31a4bc83a571dd88ee4d3db413a8611be98ee2979cae/62fbf483/rnJhAYiN0JmArh9FD-oFjc0Go6wcVMnbcsUpqQMG3oPVacolEdxGRN1e68Gocjw8k_UzkzvLOO8C3BApd9BlUw%3D%3D?uid=0&filename=PIC_0096.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 20,
      image:
        "https://downloader.disk.yandex.ru/preview/c8c258082966f18e037c38164f1adaa620627be3686de215783ce3d7b0799c27/62fbf483/YGsutwiAWD1_JFeEMLjqt9dGYs8n50qzZYwbuE6bLuYGRGcGVppSWgdGUWC6C1isJnyxz0iul7a_FZENwgxSYA%3D%3D?uid=0&filename=PIC_0145.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 21,
      image:
        "https://downloader.disk.yandex.ru/preview/80735676c8b56b2e37357b06ad5ae8e6b00e6e672a5c461a3bc94d8e0eed9712/62fc0a87/NCeuxOcuLVouyIVet8CW_9dGYs8n50qzZYwbuE6bLuaYLwZMosUqYXnxI3E8p_8gE4IVW2ZBs-JuhgVhonBsvA%3D%3D?uid=0&filename=PIC_0150.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 22,
      image:
        "https://downloader.disk.yandex.ru/preview/0bd664725b96fb046dff7ed25c68df4a8436041ab41ed83a0075d3e8fee5c154/62fc0a87/xwvBrs-7GI2bB4cKhHP7I-4d8IKOjb3HUoVSpuq0xS2wrt5ubuBlqtZ7vpj_fgJSvpZ0ZOpr49h9N62lhNGE7Q%3D%3D?uid=0&filename=PIC_0226.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 23,
      image:
        "https://downloader.disk.yandex.ru/preview/5ea25d8b4d3b273d9b0c3c4ba3632f1beb4af2fa9a74250786f642691459d94d/62fc0a87/TA76if1mek6Yo-GaAgTDN-4d8IKOjb3HUoVSpuq0xS1-ZQ2w6J3gyuW02dpqUtm09tGx4kPrjRSdYcds3l_BfA%3D%3D?uid=0&filename=PIC_0227.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
    {
      id: 24,
      image:
        "https://downloader.disk.yandex.ru/preview/9cfbaa94aff7e5defa0d658a5adb6b99186d1234e901cb219a2aefa50ada7cd9/62fc0a87/rwkD9hMSv8mrDGQe9E74CQbC-cmfYb6wGV4X_nOIU8GFyxN_QTqXF-uO1BbfPhpb0zms13Yip0s1-Et2GUiy4g%3D%3D?uid=0&filename=PIC_0230.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x937",
    },
  ];

  function RenderGallery() {
    const chunkSize = 6;
    let slides = [];

    for (let i = 0; i < images.length; i += chunkSize) {
      const chunk = images.slice(i, i + chunkSize);
      slides.push(
        <>
          <SwiperSlide style={{ width: width }}>
            <SimpleGrid columns={3} spacing={"2px"} h="100%">
              {chunk.map((item, i) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={"item-" + i}
                  w="full"
                  h="300px"
                  loading="lazy"
                  onClick={onOpen}
                />
              ))}
            </SimpleGrid>
          </SwiperSlide>
        </>
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

  const showModal = (id: number) => {
    const image = images.find((i) => i.id === id)?.image;

    return (
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="white" />
          <ModalBody p={0}>
            <Image src={image} alt={"item-" + id} w={"100%"} h="100%" />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <>
      <Heading text="Фото" isMobile={!variant} />
      <Container mb={mb} maxW="1110px">
        <RenderGallery />
      </Container>
    </>
  );
};

export default Gallery;

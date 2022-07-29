import { Container, Image, useBreakpointValue } from "@chakra-ui/react";

const Cover = () => {
  const variant = useBreakpointValue({ md: true })

  return (
    <Container maxW={"1110px"} px={variant ? ("16px") : ("0px")}>
      <Image src={"/images/cover.svg"} alt="cover"/>
    </Container>
  );
};

export default Cover;

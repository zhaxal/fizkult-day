import { Box, Image, VStack, Button } from "@chakra-ui/react";
import { Section } from "@mongo/models/events/section";
import { newlineText } from "@utils/newline";
import RegisterButton from "./RegisterButton";

interface SectionCardMobileProps extends Section {
  eventId: string;
}

const SectionCardMobile = ({
  date,
  title,
  desc,
  image,
  eventId,
}: SectionCardMobileProps) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF" w="full" h="100%">
      <VStack w="full" h="full" spacing={"14.5px"} align="">
        <Image src={image} alt={`${title}_image`} borderRadius={"32px"} />

        <VStack px={"10px"} spacing={"16px"} align="flex-start" w="full">
          <Box>{newlineText(title, "heading.mobile")}</Box>
          <Box h="120px" overflowY={"auto"}>{newlineText(desc, "body.bold.mobile")}</Box>
        </VStack>

        <VStack spacing="16px" pt="23px" px="33px" pb="31px">
          <RegisterButton eventId={eventId} />
        </VStack>
      </VStack>
    </Box>
  );
};

export default SectionCardMobile;

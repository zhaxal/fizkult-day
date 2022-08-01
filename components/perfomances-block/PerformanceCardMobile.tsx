import { Text, Box, Image, VStack } from "@chakra-ui/react";
import { Performance } from "@mongo/models/events/performance";
import { newlineText } from "@utils/newline";
import { moment } from "@utils/moment";

const PerformanceCardMobile = ({

  date,
  title,
  desc,
  image,
}: Performance) => {
  return (
    <Box h="full" w="full">
      <VStack
        h="full"
        w="full"
        spacing={"40px"}
        pb="21px"
        pt={"32px"}
        align={"flex-start"}
      >
        <VStack spacing={"24px"} align={"flex-start"}>
          <Text variant="date">
            {moment(date).tz("Europe/Moscow").format("D MMMM")}
          </Text>
          <Box>{newlineText(title, "heading.mobile.performance")}</Box>
        </VStack>
        <VStack spacing={"16px"} align={"flex-start"}>
          <Box>{newlineText(desc, "body.bold.mobile")}</Box>
          <Image
            borderRadius={"32px"}
            backgroundColor="#00AEEF"
            src={image}
            alt={`${title}_image`}
          />
        </VStack>
      </VStack>
    </Box>
  );
};

export default PerformanceCardMobile;

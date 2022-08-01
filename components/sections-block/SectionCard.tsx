import { Box, Stack, Image, Text, Button } from "@chakra-ui/react";
import { Section } from "@mongo/models/events/section";
import { newlineText } from "@utils/newline";
import { moment } from "@utils/moment";
import RegisterButton from "./RegisterButton";

interface SectionCardProps extends Section {
  eventId: string;
}

const SectionCard = ({
  date,
  title,
  desc,
  image,
  eventId,
}: SectionCardProps) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF">
      <Stack mr="24px" spacing="60px" direction="row">
        <Image
          borderRadius="32px"
          w="476px"
          objectFit={"cover"} 
          h="576px"
          src={image}
          alt={`${title}_image`}
        />
        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            {moment(date).tz("Europe/Moscow").format("D MMMM")}
          </Text>
          <Box>{newlineText(title, "heading")}</Box>
          <Box>{newlineText(desc, "body.bold")}</Box>

          <Box flexGrow={1}></Box>

          <Stack pb="68px" direction="row" spacing="30px">
            <RegisterButton eventId={eventId} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SectionCard;

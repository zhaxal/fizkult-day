import { Box, Stack, Text } from "@chakra-ui/react";
import { Schedule } from "@mongo/models/events/schedule";
import { moment } from "@utils/moment";

const ScheduleCardMobile = ({ time, title, desc }: Schedule) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF" height={"320px"}>
      <Stack
        mb="32px"
        height="64px"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "32px",
          border: "6px solid #00AEEF",
        }}
      >
        <Text
          sx={{
            color: "#E93734",
            fontSize: "32px",
            textTransform: "uppercase",
            fontFamily: "Mossport",
            lineHeight: "152%"
          }}
        >
          {moment(time).tz("Europe/Moscow").format("LT")}
        </Text>
      </Stack>

      <Stack alignItems="center">
        <Box width="full" px={"32px"}>
          <Text variant="heading.mobile" mb="10px" whiteSpace={"nowrap"}>
            {title}
          </Text>

          <Text mb={24} variant="body.bold.mobile">
            {desc}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default ScheduleCardMobile;

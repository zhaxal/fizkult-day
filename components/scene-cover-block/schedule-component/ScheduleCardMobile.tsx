import { Box, Stack, Text } from "@chakra-ui/react";
import { Schedule } from "@mongo/models/events/schedule";
import { moment } from "@utils/moment";

const ScheduleCardMobile = ({ startDate, endDate, title, desc }: Schedule) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF" height={"320px"}>
      <Stack
        mb="18px"
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
          {moment(startDate).tz("Europe/Moscow").format("LT")}
        </Text>
      </Stack>

      <Stack alignItems="center">
        <Box width="full" px={"32px"}>
          <Text variant="heading.mobile" mb="10px" whiteSpace={"nowrap"}>
            {title}
          </Text>

          <Box mb={"17px"} overflowY={"auto"} h="177px">
            <Text variant="body.mobile" >
              {desc}
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ScheduleCardMobile;

import { Box, Stack, Text } from "@chakra-ui/react";
import { Schedule } from "@mongo/models/events/schedule";
import { moment } from "@utils/moment";

const ScheduleCard = ({ time, title, desc }: Schedule) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF" h="576px">
      <Stack
        mb="45px"
        height="120px"
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
            fontSize: "64px",
            textTransform: "uppercase",
            fontFamily: "Mossport",
          }}
        >
          {moment(time).tz("Europe/Moscow").format("LT")}
        </Text>
      </Stack>

      <Stack alignItems="center">
        <Box width="312px">
          <Text variant="heading" mb="24px">
            {title}
          </Text>

          <Box mb={24} overflowY={"auto"} h="265px">
            <Text variant="body" >
              {desc}
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ScheduleCard;

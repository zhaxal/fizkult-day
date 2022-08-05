import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import { Schedule } from "@mongo/models/events/schedule";
import { moment } from "@utils/moment";

const ScheduleCard = ({ time, title, desc }: Schedule) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF" w="full" h="576px">
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
        <Box width="full" px={"53.59px"}>
          <Text variant="heading" mb="10px">
            {title}
          </Text>

          <Box mb={"68px"} overflowY={"auto"}>
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

import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface ScheduleCardProps {
  time: string;
  title: string;
  desc: string;
}

const ScheduleCard = ({ time, title, desc }: ScheduleCardProps) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF">
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
          {time}
        </Text>
      </Stack>

      <Stack alignItems="center">
        <Box width="312px">
          <Text variant="heading" mb="24px">
            {title}
          </Text>

          <Text mb={24} variant="body">
            {desc}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default ScheduleCard;

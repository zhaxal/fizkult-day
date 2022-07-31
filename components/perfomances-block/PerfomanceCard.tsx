import { Stack, Text, Box, Image } from "@chakra-ui/react";
import { Performance } from "@mongo/models/events/performance";

const PerfomanceCard = ({
  position,
  date,
  title,
  description,
  image,
}: Performance) => {
  return (
    <Box>
      <Stack
        mr={position === "right" ? "-15rem" : 0}
        ml={position === "left" ? "-15rem" : 0}
        spacing="30px"
        direction="row"
      >
        {position === "left" && (
          <Image
            sx={{
              backgroundColor: "#00AEEF",
              borderRadius: "0px 32px 32px 0px",
              height: "576px",
            }}
            src={image}
            alt="velo"
          />
        )}

        <Box>
          <Text width="fit-content" mb="24px" variant="date">
            {date}
          </Text>
          <Text color="#00ACEF" mb="40px" variant="heading">
            {title}
          </Text>
          <Text variant="body">{description}</Text>
        </Box>
        {position === "right" && (
          <Image
            sx={{
              backgroundColor: "#00AEEF",
              borderRadius: "32px 0px 0px 32px",
              height: "576px",
            }}
            src={image}
            alt="velo"
          />
        )}
      </Stack>
    </Box>
  );
};

export default PerfomanceCard;

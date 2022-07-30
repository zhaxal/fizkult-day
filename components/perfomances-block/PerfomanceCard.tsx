import { Stack, Text, Box, Image } from "@chakra-ui/react";
import { Perfomance } from "@mongo/models/events/perfomance";

const PerfomanceCard = ({
  position,
  date,
  title,
  description,
  image,
}: Perfomance) => {
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
              borderRadius: "32px",
              boxSize: "576px",
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
              borderRadius: "32px",
              boxSize: "576px",
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

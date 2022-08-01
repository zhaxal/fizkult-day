import { Stack, Text, Box, Image } from "@chakra-ui/react";
import { Performance } from "@mongo/models/events/performance";
import { moment } from "@utils/moment";
import { newlineText } from "@utils/newline";

const PerformanceCard = ({
  position,
  date,
  title,
  desc,
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
              borderRadius: "32px",
              boxSize: "576px",
            }}
            src={image}
            alt="velo"
          />
        )}

        <Box>
          <Text width="fit-content" mb="24px" variant="date">
            {moment(date).tz("Europe/Moscow").format("D MMMM")}
          </Text>
          <Box color="#00ACEF" mb="40px">
            {newlineText(title, "heading.blue")}
          </Box>
          <Box>{newlineText(desc, "body.bold")}</Box>
        </Box>
        {position === "right" && (
          <Image
            sx={{
              backgroundColor: "#00AEEF",
              borderRadius: "32px",
              boxSize: "576px",
            }}
            src={image}
            alt={`${title}_image`}
          />
        )}
      </Stack>
    </Box>
  );
};

export default PerformanceCard;

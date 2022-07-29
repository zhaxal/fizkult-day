import { Text, Box, Image, VStack } from "@chakra-ui/react";
import { Perfomance } from "@mongo/models/events/perfomance";
import { newlineText } from "@utils/newline";

const PerfomanceCardMobile = ({
    position,
    date,
    title,
    description,
    image,
}: Perfomance) => {
    return (
        <Box h="full" w="full">
            <VStack h="full" w="full" spacing={"40px"} pb="21px" pt={"32px"} align={"flex-start"}>
                <VStack spacing={"24px"} align={"flex-start"}>
                    <Text variant="date">
                        {date}
                    </Text>
                    <Box>{newlineText(title, "heading.mobile.performance")}</Box>
                </VStack>
                <VStack spacing={"16px"} align={"flex-start"}>
                    <Box>{newlineText(description, "body.bold.mobile")}</Box>
                    <Image
                        borderRadius={"32px"}
                        backgroundColor="#00AEEF"
                        src={image}
                        alt="velo"
                    />
                </VStack>
            </VStack>
        </Box>
    );
};

export default PerfomanceCardMobile;

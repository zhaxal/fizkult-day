import { Box, Image, VStack, Button } from "@chakra-ui/react";
import { Section } from "@mongo/models/events/section";
import { newlineText } from "@utils/newline";

const SectionCardMobile = ({ date, title, desc, image }: Section) => {
    return (
        <Box borderRadius="32px" bg="#00AEEF" w="full" h="full">
            <VStack w="full" h="full" spacing={"14.5px"} align="">
                <Image src={image} alt="guys" borderRadius={"32px"} />


                <VStack px={"10px"} spacing={"16px"} align="flex-start" w="full">
                    <Box>{newlineText(title, "heading.mobile")}</Box>
                    <Box>{newlineText(desc, "body.bold.mobile")}</Box>
                </VStack>

                <VStack spacing="16px" px="33px" pb="67px">
                    <Button variant="section.register" w="full">Записаться бесплатно</Button>
                </VStack>
            </VStack>
        </Box>
    );
};

export default SectionCardMobile;

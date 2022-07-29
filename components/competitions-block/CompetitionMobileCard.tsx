import {
    Box,
    Stack,
    Image,
    Text,
    Button,
    useDisclosure,
    ModalOverlay,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    VStack,
} from "@chakra-ui/react";
import RegistrationForm from "@components/forms/RegistrationForm";
import { Competition } from "@mongo/models/events/competition";
import { newlineText } from "@utils/newline";

const WatchButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} variant="competition.watch">
                БУДУ ЗРИТЕЛЕМ
            </Button>

            <Modal size="md" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Форма для записи</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <RegistrationForm event="Competition" />
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
        </>
    );
};

const CompetitionMobileCard = ({ date, title, desc, image }: Competition) => {
    return (
        <Box borderRadius="32px" bg="#00AEEF">
            <Box pos="absolute" w="full" top={0} >
                <Text bg="#32BBEE" variant="date" mr={"87px"} ml={"116px"}>
                    {date}
                </Text>
            </Box>
            <VStack w="full" h="full" spacing={"12.5px"} pb="27px">
                <Image src={image} alt="guys" borderRadius={"32px"} />


                <VStack px={"10px"} spacing={"24px"} align="flex-start">
                    <Box>{newlineText(title, "heading.mobile")}</Box>
                    <Box>{newlineText(desc, "body.bold.mobile")}</Box>
                </VStack>

                <VStack spacing="16px">
                    <Button variant="competition.join">УЧАСТВОВАТЬ</Button>
                    <WatchButton />
                </VStack>
            </VStack>
        </Box>
    );
};

export default CompetitionMobileCard;

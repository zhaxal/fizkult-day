import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import SecretForm from "@components/forms/SecretForm";
import { useAdmin } from "@contexts/admin-context";
import { NextPage } from "next";
import { useEffect } from "react";

const Admin: NextPage = () => {
  const { status, signOut } = useAdmin();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (status === "unauthenticated") {
      onOpen();
    } else {
      onClose();
    }
  }, [onClose, onOpen, status]);

  return (
    <>
      <Container maxW="1110px" py={5}>
        <Text variant="body.bold">Панель админа</Text>

        <SimpleGrid minChildWidth="120px" spacing="40px">
          <Button variant="register">Ивенты</Button>
          <Button variant="register">Статистика</Button>
          <Button onClick={signOut} variant="register">
            Выйти
          </Button>
        </SimpleGrid>
      </Container>
      <Modal
        closeOnOverlayClick={false}
        size="md"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Форма для входа в админ панель</ModalHeader>

          <ModalBody>
            <SecretForm />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Admin;

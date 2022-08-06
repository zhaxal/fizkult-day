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
import FindRecordButton from "@components/admin-page-components/FindRecordButton";
import SecretForm from "@components/forms/SecretForm";
import { useAdmin } from "@contexts/admin-context";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Admin: NextPage = () => {
  const { status, signOut, role } = useAdmin();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      onOpen();
    } else {
      onClose();
    }
  }, [onClose, onOpen, status]);

  const handleRedirect = (path: string) => {
    return () => router.push(path);
  };

  return (
    <>
      <Container maxW="1110px" py={5}>
        <Text variant="body.bold">Панель админа</Text>

        <SimpleGrid minChildWidth="120px" spacing="40px">
          {(role === "staff" || role === "admin") && <FindRecordButton />}

          {role === "admin" && (
            <Button
              onClick={handleRedirect("/admin/events")}
              variant="register"
            >
              Ивенты
            </Button>
          )}

          <Button onClick={signOut} variant="register">
            Выйти
          </Button>
        </SimpleGrid>
      </Container>
      <Modal
        closeOnEsc={false}
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

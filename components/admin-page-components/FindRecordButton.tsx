import {
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  useToast,
  Stack,
} from "@chakra-ui/react";
import { useRecord } from "@hooks/record";
import { Record } from "@mongo/models/record";
import { ChangeEvent, useState } from "react";
import { moment } from "@utils/moment";
import { WithId } from "mongodb";

const FindRecordButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getRecordByData, validateRecord } = useRecord();
  const [code, setCode] = useState("");
  const [record, setRecord] = useState<WithId<Record> | null>(null);
  const toast = useToast();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleValidate = () => {
    if (!record) return;
    validateRecord(record._id.toString());
    handleClear();
    onClose();
  };

  const handleSearch = () => {
    getRecordByData(code)
      .then((record) => {
        setRecord(record);
      })
      .catch((err) => {
        setCode("");
        if (err.response) {
          toast({
            title: err.response.data,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: err.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  };

  const handleClear = () => {
    setRecord(null);
    setCode("");
  };

  return (
    <>
      <Button onClick={onOpen} variant="register">
        Найти по коду
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Форма для поиска по коду</ModalHeader>

          {record ? (
            <>
              <ModalCloseButton onClick={handleClear} />

              <ModalBody>
                <Stack spacing={2}>
                  <Text variant="body">Имя: {record.name}</Text>
                  <Text variant="body">
                    Дата записи:{" "}
                    {moment(record.date).tz("Europe/Moscow").format("lll")}
                  </Text>
                  <Text variant="body">
                    Статус: {record.arrived ? "Прибыл" : "Не прибыл"}
                  </Text>
                  <Text variant="body">Код: {record.code}</Text>
                  {!record.arrived && (
                    <Button onClick={handleValidate}>Подтвердить</Button>
                  )}
                </Stack>
              </ModalBody>
            </>
          ) : (
            <>
              <ModalCloseButton />
              <ModalBody>
                <Stack spacing={3}>
                  <FormControl isRequired>
                    <FormLabel>Код</FormLabel>
                    <Input
                      name="code"
                      onChange={handleChange}
                      value={code}
                      placeholder="Код"
                    />
                  </FormControl>

                  <Button onClick={handleSearch}>Поиск</Button>
                </Stack>
              </ModalBody>
            </>
          )}

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default FindRecordButton;

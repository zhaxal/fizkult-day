import {
  Button,
  Checkbox,
  Container,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import FindRecordButton from "@components/admin-page-components/FindRecordButton";
import SecretForm from "@components/forms/SecretForm";
import { useAdmin } from "@contexts/admin-context";
import { useRecord } from "@hooks/record";
import { useSettings } from "@hooks/settings";
import { Record } from "@mongo/models/record";
import { Setting } from "@mongo/models/setting";
import { fetcher } from "@utils/fetcher";
import moment from "moment";
import { WithId } from "mongodb";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Admin: NextPage = () => {
  const { status, signOut, role } = useAdmin();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateSetting } = useSettings();

  const { data } = useSWR<WithId<Record>[]>(`/api/records`, fetcher);
  const { data: available } = useSWR<WithId<Setting>>(`/api/setting`, fetcher);

  const [countByDate, setCountByDate] = useState<Map<string, number>>(new Map());
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      onOpen();
    } else {
      onClose();
    }
  }, [onClose, onOpen, status]);

  useEffect(() => {
    const newCountByDate = new Map<string, number>();

    if (data) {
      for (const row of data) {
        const dateString = String(row.date).split('T')[0];

        if (newCountByDate.has(dateString)) {
          const count = newCountByDate.get(dateString)!;
          newCountByDate.set(dateString, count + 1);
        } else {
          newCountByDate.set(dateString, 1);
        }
      }
      setCountByDate(newCountByDate);
    }


  }, [data]);


  const handleRedirect = (path: string) => {
    return () => router.push(path);
  };

  return (
    <>
      <Container maxW="1110px" py={5}>
        <Text variant="body.bold">Панель админа</Text>

        <SimpleGrid minChildWidth="120px" spacing="40px">
          {(role === "staff" || role === "admin") && <FindRecordButton />}
          {(role === "staff" || role === "admin") &&
            <Button
              onClick={handleRedirect("/admin/schedule")}
              variant="register"
            >
              Расписание
            </Button>
          }

          {/* {role === "admin" && (
            <Button
              onClick={handleRedirect("/admin/events")}
              variant="register"
            >
              Ивенты
            </Button>
          )} */}

          <Button onClick={signOut} variant="register">
            Выйти
          </Button>
        </SimpleGrid>

        <Tabs>
          <TabList>
            <Tab>Заявки</Tab>
            <Tab>Статистика</Tab>
            <Tab>Настройка</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                  <Thead>
                    <Tr>
                      <Th>Имя</Th>
                      <Th>Почта</Th>
                      <Th>Дата подачи</Th>
                      <Th>Присутствует</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map((record, i) => (
                      <Tr key={i}>
                        <Td>{record.name}</Td>
                        <Td>{record.email}</Td>
                        <Td>{moment(record.date).tz("Europe/Moscow").format("lll")}</Td>
                        <Td>{record.arrived ? "✅" : "✖"}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                  <Thead>
                    <Tr>
                      <Th>Дата</Th>
                      <Th>Записалось за день</Th>
                      <Th>Всего</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {Array.from(countByDate).map(([key, value], i) =>
                    (
                      <Tr
                        key={i}
                      >
                        <Td>{key}</Td>
                        <Td>
                          {value}
                        </Td>
                        <Td>{data?.length}</Td>
                      </Tr>
                    )
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <Stack direction={"row"}>
                <Text variant='body'>{"Доступ к регистраций пользователей"}</Text>
                <Checkbox isChecked={available?.available} onChange={(e) => {
                  updateSetting({ id: String(available?._id), available: e.target.checked })
                }} />
                <Text variant='body'>{available?.available ? 'ДА' : 'НЕТ'}</Text>
              </Stack>

            </TabPanel>
          </TabPanels>
        </Tabs>
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

import { useToast } from "@chakra-ui/react";
import { FitnessRecord } from "@mongo/models/fitness-record";
import { Record } from "@mongo/models/record";
import axios from "axios";
import { WithId } from "mongodb";
import { useAxiosHandler } from "./handlers";

export const useRecord = () => {
  const { handleAxios } = useAxiosHandler();
  const toast = useToast();

  const addRecord = (record: Record | FitnessRecord) => {
    handleAxios(axios.post(`/api/records`, record));
  };


  const getRecordByData = async (code: string) => {
    const res = await axios.get<WithId<Record>>(`/api/records/validation`, {
      params: { code },
    });

    if (res.data === null) {
      toast({
        title: "Ничего не было найдено",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
    return res.data;
  };

  const validateRecord = (recordId: string) => {
    handleAxios(
      axios.patch(`/api/records/validation`, null, { params: { recordId } })
    );
  };

  return {
    addRecord,
    getRecordByData,
    validateRecord,
  };
};

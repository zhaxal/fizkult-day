import { useToast } from "@chakra-ui/react";
import { Competition } from "@mongo/models/events/competition";
import axios from "axios";

export const useCompetition = () => {
  const toast = useToast();

  const addCompetition = (competition: Competition) => {
    axios
      .post(`/api/events/competitions`, competition)
      .then((res) => {
        toast({
          title: res.data,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
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

  const deleteCompetition = (competitionId: string) => {
    axios
      .delete(`/api/events/competitions/${competitionId}`)
      .then((res) => {
        toast({
          title: res.data,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
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

  return { addCompetition, deleteCompetition };
};

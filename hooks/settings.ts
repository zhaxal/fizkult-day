import axios from "axios";
import { WithId } from "mongodb";
import { Setting } from "@mongo/models/setting";
import { useAxiosHandler } from "./handlers";

interface SettingProps {
  id: string;
  available: boolean;
}

export const useSettings = () => {
  const { handleAxios } = useAxiosHandler();
  //   const { updateSnackbar } = useSnackbar();

  const updateSetting = (setting: SettingProps) => {
    handleAxios(axios.put(`/api/setting`, setting));
  };

  return {
    updateSetting,
  };
};

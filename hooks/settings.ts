import axios from "axios";
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

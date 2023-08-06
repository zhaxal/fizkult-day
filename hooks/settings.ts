import axios from "axios";
import { useAxiosHandler } from "./handlers";
import { useSWRConfig } from "swr";

interface SettingProps {
  id: string;
  available: boolean;
}

export const useSettings = () => {
  const { handleAxios } = useAxiosHandler();
  const { mutate } = useSWRConfig();

  //   const { updateSnackbar } = useSnackbar();

  const updateSetting = (setting: SettingProps) => {
    handleAxios(axios.put(`/api/setting`, setting)).then(() => {
      mutate(`/api/setting`);
    });
  };

  return {
    updateSetting,
  };
};

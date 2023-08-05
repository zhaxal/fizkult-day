import { ObjectId, WithId } from "mongodb";
import { BackendFunction } from "../models/backend-function";
import { Setting } from "../models/setting";
import { settingsCol } from "../mongo";

interface SettingProps {
  id: string;
  available: boolean;
}

export const getSetting = async (): Promise<
  BackendFunction<WithId<Setting>>
> => {
  try {
    const doc = await settingsCol.findOne();

    if (doc === null) {
      let err = new Error("Такого кода в базе нету");
      return [null, err];
    }

    const result = doc;

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const updateSettings = async ({
  id,
  available,
}: SettingProps): Promise<BackendFunction<string>> => {
  await settingsCol.updateOne(
    { _id: new ObjectId(id) },
    { $set: { available: available } }
  );

  try {
    const result = "Вы успешно изменили доступ";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

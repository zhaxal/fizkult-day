import { BackendFunction } from "@mongo/models/backend-function";
import { Record } from "@mongo/models/record";
import { recordsCol } from "@mongo/mongo";
import { randomInt } from "crypto";
import { ObjectId, WithId } from "mongodb";

export const getRecords = async (): Promise<
  BackendFunction<WithId<Record>[]>
> => {
  try {
    const cursor = recordsCol.find().sort({ date: 1 });
    const events = await cursor.toArray();
    const result = events;

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const addRecord = async (
  record: Record
): Promise<BackendFunction<string>> => {
  try {
    record.code = randomInt(100000, 999999);
    await recordsCol.insertOne(record);

    const result = "Вы успешно зарегестрировались";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const deleteRecord = async (
  recordId: string
): Promise<BackendFunction<string>> => {
  try {
    const filter = { _id: new ObjectId(recordId) };

    await recordsCol.deleteOne(filter);

    const result = "Запись удалена";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

import { BackendFunction } from "@mongo/models/backend-function";
import { recordsCol } from "@mongo/mongo";

export const getArrivedById = async (
  eventId: string
): Promise<BackendFunction<number>> => {
  try {
    const cursor = recordsCol.find({ eventId, arrived: true });
    const events = await cursor.toArray();

    const result = events.length;

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const getRegisteredById = async (
  eventId: string
): Promise<BackendFunction<number>> => {
  try {
    const cursor = recordsCol.find({ eventId, arrived: false });
    const events = await cursor.toArray();

    const result = events.length;

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

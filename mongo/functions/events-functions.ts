import { BackendFunction } from "@mongo/models/backend-function";
import { Competition } from "@mongo/models/events/competition";
import { competitionCol } from "@mongo/mongo";
import { ObjectId, WithId } from "mongodb";

export const getCompetitions = async (): Promise<
  BackendFunction<WithId<Competition>[]>
> => {
  try {
    const cursor = competitionCol.find().sort({ date: 1 });
    const events = await cursor.toArray();
    const result = events;

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const addCompetition = async (
  competition: Competition
): Promise<BackendFunction<string>> => {
  try {
    await competitionCol.insertOne(competition);
    const result = "Создан ивент";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const editCompetition = async (
  competitionId: string,
  competition: Competition
): Promise<BackendFunction<string>> => {
  try {
    const filter = { _id: new ObjectId(competitionId) };
    await competitionCol.updateOne(filter, competition);
    const result = "Создан ивент";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const deleteCompetition = async (
  competitionId: string
): Promise<BackendFunction<string>> => {
  try {
    const filter = { _id: new ObjectId(competitionId) };
    await competitionCol.deleteOne(filter);
    const result = "Удален ивент";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

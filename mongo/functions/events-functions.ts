import { BackendFunction } from "@mongo/models/backend-function";
import { Competition } from "@mongo/models/events/competition";
import { Performance } from "@mongo/models/events/performance";
import { Schedule } from "@mongo/models/events/schedule";
import { SchoolEvent } from "@mongo/models/events/schoolevent";
import { Section } from "@mongo/models/events/section";
import { FitnessRecord } from "@mongo/models/fitness-record";
import { Record } from "@mongo/models/record";
import { Stats } from "@mongo/models/stats";
import {
  competitionCol,
  perfomanceCol,
  recordsCol,
  scheduleCol,
  schoolEventCol,
  sectionCol,
} from "@mongo/mongo";
import { ObjectId, WithId } from "mongodb";

export type EventTypes = "schedule" | "performance" | "competition" | "section" | "schoolEvent";

export type Event = Schedule | Performance | Competition | Section | SchoolEvent;

export const getEvents = async (
  type: EventTypes
): Promise<BackendFunction<WithId<Event>[]>> => {
  try {
    let result: WithId<Event>[] | null = null;

    switch (type) {
      case "schedule": {
        const cursor = scheduleCol.find().sort({ time: 1 });
        const events = await cursor.toArray();
        result = events;
        break;
      }
      case "performance": {
        const cursor = perfomanceCol.find().sort({ date: 1 });
        const events = await cursor.toArray();
        result = events;
        break;
      }

      case "competition": {
        const cursor = competitionCol.find().sort({ date: 1 });
        const events = await cursor.toArray();
        result = events;
        break;
      }

      case "section": {
        const cursor = sectionCol.find().sort({ date: 1 });
        const events = await cursor.toArray();
        result = events;
        break;
      }
      case "section": {
        const cursor = sectionCol.find().sort({ date: 1 });
        const events = await cursor.toArray();
        result = events;
        break;
      }
      case "schoolEvent": {
        const cursor = schoolEventCol.find().sort({ date: 1 });
        const events = await cursor.toArray();
        result = events;
        break;
      }
    }

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const addEvent = async (
  event: Event
): Promise<BackendFunction<string>> => {
  try {
    switch (event.type) {
      case "schedule":
        event.time = new Date(event.time);
        await scheduleCol.insertOne(event);
        break;

      case "performance":
        event.date = new Date(event.date);
        await perfomanceCol.insertOne(event);
        break;

      case "competition":
        event.date = new Date(event.date);
        await competitionCol.insertOne(event);
        break;

      case "section":
        event.date = new Date(event.date);
        await sectionCol.insertOne(event);
        break;

      case "schoolEvent":
        await schoolEventCol.insertOne(event);
        break;
    }

    const result = "Создан ивент";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const deleteEvent = async (
  type: EventTypes,
  eventId: string
): Promise<BackendFunction<string>> => {
  try {
    const filter = { _id: new ObjectId(eventId) };

    switch (type) {
      case "schedule": {
        await scheduleCol.deleteOne(filter);
        break;
      }
      case "performance": {
        await perfomanceCol.deleteOne(filter);
        break;
      }

      case "competition": {
        await competitionCol.deleteOne(filter);
        break;
      }
      case "section": {
        await sectionCol.deleteOne(filter);
        break;
      }

      case "schoolEvent": {
        await schoolEventCol.deleteOne(filter);
        break;
      }
    }

    const result = "Удален ивент";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const updateEvent = async (
  eventId: string,
  event: Event
): Promise<BackendFunction<string>> => {
  try {
    const filter = { _id: new ObjectId(eventId) };

    switch (event.type) {
      case "schedule":
        event.time = new Date(event.time);
        await scheduleCol.updateOne(filter, { $set: event });
        break;

      case "performance":
        event.date = new Date(event.date);
        await perfomanceCol.updateOne(filter, { $set: event });
        break;

      case "competition":
        event.date = new Date(event.date);
        await competitionCol.updateOne(filter, { $set: event });
        break;

      case "section":
        event.date = new Date(event.date);
        await sectionCol.updateOne(filter, { $set: event });
        break;

      case "schoolEvent":
        await schoolEventCol.updateOne(filter, { $set: event });
        break;

    }

    const result = "Обновлен ивент";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const getParticipantsByEvent = async (
  eventId: string
): Promise<BackendFunction<WithId<Record | FitnessRecord>[]>> => {
  try {
    const cursor = recordsCol.find({ eventId });
    const participants = await cursor.toArray();

    const result = participants;

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

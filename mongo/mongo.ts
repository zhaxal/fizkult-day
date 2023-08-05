import { MongoClient } from "mongodb";
import { Competition } from "./models/events/competition";
import { Performance } from "./models/events/performance";
import { Schedule } from "./models/events/schedule";
import { SchoolEvent } from "./models/events/schoolevent";
import { Section } from "./models/events/section";
import { FitnessRecord } from "./models/fitness-record";
import { Form } from "./models/form";
import { Record } from "./models/record";
import { Setting } from "./models/setting";

const uri = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);
client.connect();
const db = client.db(process.env.DB_NAME || "fd");

export const recordsCol = db.collection<Record>("records");
export const fitnessRecordsCol = db.collection<FitnessRecord>("records");
export const competitionCol = db.collection<Competition>("competitions");
export const perfomanceCol = db.collection<Performance>("perfomances");
export const scheduleCol = db.collection<Schedule>("schedules");
export const sectionCol = db.collection<Section>("sections");
export const schoolEventCol = db.collection<SchoolEvent>("schoolEvent");
export const settingsCol = db.collection<Setting>("setting");

export const formsCol = db.collection<Form>("forms");

export { db };

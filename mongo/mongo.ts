import { MongoClient } from "mongodb";
import { Competition } from "./models/events/competition";
import { Performance } from "./models/events/performance";
import { Schedule } from "./models/events/schedule";
import { Section } from "./models/events/section";
import { Record } from "./models/record";

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";
const client = new MongoClient(uri);
client.connect();
const db = client.db(process.env.DB_NAME || "fd");

export const recordsCol = db.collection<Record>("records");
export const competitionCol = db.collection<Competition>("competitions");
export const perfomanceCol = db.collection<Performance>("perfomances");
export const scheduleCol = db.collection<Schedule>("schedules");
export const sectionCol = db.collection<Section>("sections");

export { db };

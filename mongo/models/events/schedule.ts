import { ObjectId } from "mongodb";
import { BaseEvent } from "./event";

export interface Schedule extends BaseEvent {
  _id: ObjectId | string;
  type: "schedule";
  startDate: string;
  endDate: string;
}

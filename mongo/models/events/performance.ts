import { BaseEvent } from "./event";

export interface Performance extends BaseEvent {
  type: "performance";
  position: "left" | "right";
  date: Date;
  image: string;
}

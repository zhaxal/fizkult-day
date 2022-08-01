import { Record } from "./record";

export interface FitnessRecord extends Record {
  type: "fitness";
  phoneNumber: string;
  currentClub: string;
  recognition: string;
  class: string;
}

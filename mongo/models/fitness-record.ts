import { Record } from "./record";

export interface FitnessRecord extends Omit<Record, 'type'> {
  type: "fitness";
  phoneNumber: string;
  currentClub: string;
  recognition: string;
  class: string;
}

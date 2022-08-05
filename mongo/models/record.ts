export interface Record {
  type: "normal";
  name: string;
  email: string;
  eventId: string;
  date: Date;
  code?: number;
  arrived: boolean;
}

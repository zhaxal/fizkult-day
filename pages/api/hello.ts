// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { randomInt } from "crypto";
import { Schedule } from "@mongo/models/events/schedule";

export default function handler(req: NextApiRequest, res: NextApiResponse) {


  const test = {} as Schedule


  res.status(200).json({ code: randomInt(100000, 999999) });
}

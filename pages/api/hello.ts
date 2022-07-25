// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { randomInt } from "crypto";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ code: randomInt(100000, 999999) });
}

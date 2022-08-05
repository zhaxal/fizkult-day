import {
  getRecordByData,
  validateRecord,
} from "@mongo/functions/records-functions";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { code, recordId },
  } = req;

  switch (method) {
    case "GET":
      {
        const eventCode: number = parseInt(code as string);

        const [result, err] = await getRecordByData(eventCode);
        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }
      break;
    case "PATCH":
      {
        const [result, err] = await validateRecord(recordId as string);

        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }

      break;

    default:
      res.setHeader("Allow", ["GET", "PATCH"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

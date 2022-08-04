import { addRecord, getRecords } from "@mongo/functions/records-functions";
import { Record } from "@mongo/models/record";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      {
        const [result, err] = await getRecords();
        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }
      break;
    case "POST":
      {
        const data: Record = req.body;

        const [result, err] = await addRecord(data);

        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }

      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

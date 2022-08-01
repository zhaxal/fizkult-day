import { addFitnessRecord } from "@mongo/functions/record-functions";
import { FitnessRecord } from "@mongo/models/fitness-record";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "POST":
      {
        const data: FitnessRecord = req.body;

        const [result, err] = await addFitnessRecord(data);

        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

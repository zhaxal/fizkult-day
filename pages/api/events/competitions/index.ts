import {
  addCompetition,
  getCompetitions,
} from "@mongo/functions/events-functions";
import { Competition } from "@mongo/models/events/competition";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      {
        const [result, err] = await getCompetitions();
        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }
      break;
    case "POST":
      {
        const data: Competition = req.body;

        const [result, err] = await addCompetition(data);

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

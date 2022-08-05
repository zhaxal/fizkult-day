import { getArrivedById, getRegisteredById } from "@mongo/functions/stats-functions";
import { NextApiRequest, NextApiResponse } from "next";

type StatMode = "arrived" | "total";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { eventId, statMode },
    method,
  } = req;

  switch (statMode as StatMode) {
    case "arrived":
      switch (method) {
        case "GET":
          {
            if (typeof eventId !== "string") {
              res.status(400).send("Bad request");
              break;
            }

            const [result, err] = await getArrivedById(eventId);
            if (err !== null) {
              res.status(500).send(err.message);
            } else if (result !== null) res.status(200).json(result);
          }
          break;

        default:
          res.setHeader("Allow", ["GET"]);
          res.status(405).end(`Method ${method} Not Allowed`);
      }

      break;

    case "total":
      switch (method) {
        case "GET":
          {
            if (typeof eventId !== "string") {
              res.status(400).send("Bad request");
              break;
            }

            const [result, err] = await getRegisteredById(eventId);
            if (err !== null) {
              res.status(500).send(err.message);
            } else if (result !== null) res.status(200).json(result);
          }
          break;

        default:
          res.setHeader("Allow", ["GET"]);
          res.status(405).end(`Method ${method} Not Allowed`);
      }

      break;

    default:
      res.status(400).send("Bad request, incorrect stateMode");
      break;
  }
};

export default handler;

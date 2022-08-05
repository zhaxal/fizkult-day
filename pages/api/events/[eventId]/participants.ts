import { getParticipantsByEvent } from "@mongo/functions/events-functions";

import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { eventId },
    method,
  } = req;

  switch (method) {
    case "GET":
      {
        if (typeof eventId !== "string") {
          res.status(400).send("Bad request");
          break;
        }

        const [result, err] = await getParticipantsByEvent(eventId);

        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

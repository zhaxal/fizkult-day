import { deleteEvent, updateEvent } from "@mongo/functions/events-functions";
import { isEvents } from "@utils/type-guards";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { type, eventId },
    method,
  } = req;

  switch (method) {
    case "DELETE":
      {
        if (typeof type !== "string" || typeof eventId !== "string") {
          res.status(400).send("Bad request");
          break;
        }

        if (!isEvents(type)) {
          res.status(400).send("Incorrect event type");
          break;
        }

        const [result, err] = await deleteEvent(type, eventId);
        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }
      break;

    case "PATCH":
      {
        if (typeof eventId !== "string") {
          res.status(400).send("Bad request");
          break;
        }

        const [result, err] = await updateEvent(eventId, req.body);
        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }
      break;

    default:
      res.setHeader("Allow", ["DELETE", "PATCH"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

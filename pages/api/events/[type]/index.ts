import { getEvents, addEvent } from "@mongo/functions/events-functions";
import { isEvents } from "@utils/type-guards";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { type },
    method,
  } = req;

  switch (method) {
    case "GET":
      {
        if (typeof type !== "string") {
          res.status(400).send("Bad request");
          break;
        }

        if (!isEvents(type)) {
          res.status(400).send("Incorrect event type");
          break;
        }

        const [result, err] = await getEvents(type);
        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }
      break;
    case "POST":
      {
        const [result, err] = await addEvent(req.body);

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

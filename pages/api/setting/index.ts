import { getSetting, updateSettings } from "@mongo/functions/setting-functions";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "PUT":
      {
        const [result, err] = await updateSettings(body);

        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }

      break;
    case "GET":
      {
        const [result, err] = await getSetting();

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

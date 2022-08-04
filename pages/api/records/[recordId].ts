import { deleteRecord } from "@mongo/functions/records-functions";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
  const {
    query: { recordId },
    method,
  } = req;


  switch (method) {
    case "DELETE":
      {
        const [result, err] = await deleteRecord(recordId as string);

        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }
      break;

    default:
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

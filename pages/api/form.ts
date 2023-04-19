import { BackendFunction } from "@mongo/models/backend-function";
import { Form } from "@mongo/models/form";
import { formsCol } from "@mongo/mongo";

import { NextApiRequest, NextApiResponse } from "next";

const addRecord = async (form: Form): Promise<BackendFunction<string>> => {
  try {
    await formsCol.insertOne(form);

    const result = "Вы успешно записались";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      {
        const [result, err] = await addRecord(body);

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

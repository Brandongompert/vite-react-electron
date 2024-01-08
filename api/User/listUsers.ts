import { getDbInstance } from "@database/index";
import { users as usersTable } from "@database/schema";
import { Request, Response } from "express";

async function listUsers(req: Request, res: Response) {
  const db = await getDbInstance();

  try {
    const users = await db.select().from(usersTable).execute();

    res.status(200).send(users);
  } catch (error) {
    console.log("Error listing users:  ", error);
    res.status(500).json(`Error listing users:  ${error}`);
  }
}

export default listUsers;

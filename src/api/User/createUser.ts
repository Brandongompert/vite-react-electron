import { getDbInstance } from "@database/index";
import { users } from "@database/schema";
import { Request, Response } from "express";

async function createUser(req: Request, res: Response) {
  const db = await getDbInstance();

  try {
    db.insert(users)
      .values({
        name: req.body.data.name,
      })
      .execute();
    res.status(200).json(`User ${req.body.data.name} created!`);
  } catch (error) {
    console.log("Error creating user:  ", error);
    res.status(500).json(`Error creating user:  ${error}`);
  }
}

export default createUser;

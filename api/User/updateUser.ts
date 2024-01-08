import { getDbInstance } from "@database/index";
import { users } from "@database/schema";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";

async function updateUser(req: Request, res: Response) {
  const db = await getDbInstance();

  const userId = req.body.id;

  try {
    db.update(users)
      .set({
        name: req.body.name,
      })
      .where(eq(users.id, userId))
      .execute();
    res.status(200).json(`User ${req.body.name} updated!`);
  } catch (error) {
    console.log("Error updating user:  ", error);
    res.status(500).json(`Error updating user:  ${error}`);
  }
}

export default updateUser;

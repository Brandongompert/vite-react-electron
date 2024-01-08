import { getDbInstance } from "@database/index";
import { users } from "@database/schema";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";

async function getUserById(req: Request, res: Response) {
  const db = await getDbInstance();

  try {
    const userId = Number(req.params.id);
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .execute();

    res.status(200).send(user[0]);
    console.log("User found:  ", user[0]);
  } catch (error) {
    console.log("Error getting user:  ", error);
    res.status(500).json(`Error getting user:  ${error}`);
  }
}

export default getUserById;

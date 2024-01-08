import { getDbInstance } from "@database/index";
import { users } from "@database/schema";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";

const deleteUser = async (req: Request, res: Response) => {
  const db = await getDbInstance();

  const userId = Number(req.params.id);

  try {
    db.delete(users).where(eq(users.id, userId)).execute();
    res.status(200).json(`User ${req.body.name} deleted!`);
  } catch (error) {
    console.log("Error deleting user:  ", error);
    res.status(500).json(`Error deleting user:  ${error}`);
  }
};

export default deleteUser;

import { getDbInstance } from "@database/index";
import { users } from "@database/schema";

async function createUser(req: any, res: any) {
  const db = await getDbInstance();

  try {
    db.insert(users)
      .values({
        name: req.body.data.name,
      })
      .execute();
    res.send(`User ${req.body.data.name} created!`);
  } catch (error) {
    console.log("Error creating user:  ", error);
    res.send("Error creating user");
  }
}

export default createUser;

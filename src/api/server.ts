import express from "express";
import dotenv from "dotenv";
import createUser from "./User/createUser";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(cors());

  app.use(bodyParser.json());

  const start = async () => {
    app.listen(3001, async () => {
      console.log(
        "Express is now listening for incoming connections on port 3001."
      );
    });

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    // create users route
    app.post("/users", async (req, res) => {
      await createUser(req, res);
    });
    // get users route

    app.get("/users", (req, res) => res.send("get users request"));
  };
  start().then(() => console.log("Server is ready----------"));
}
export default startServer;

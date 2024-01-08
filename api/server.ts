import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { usersRouter } from "./User";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(cors());

  app.use(bodyParser.json());

  app.use("/users", usersRouter);

  const start = async () => {
    app.listen(3001, async () => {
      console.log(
        "  - - - - -  - Express is now listening for incoming connections on port 3001 - - - - - - -"
      );
    });
  };
  start();
}
export default startServer;

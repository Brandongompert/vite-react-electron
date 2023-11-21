import express from "express";
import dotenv from "dotenv";
dotenv.config();

async function startServer() {
  const app = express();

  const start = async () => {
    app.listen(3001, async () => {
      console.log(
        "Express is now listening for incoming connections on port 3001."
      );
    });

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });
  };
  start().then(() => console.log("Server is ready----------"));
}
export default startServer;

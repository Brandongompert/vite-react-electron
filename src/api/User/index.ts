import { Router } from "express";
import createUser from "./createUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";

export const usersRouter = Router();

// GET
usersRouter.get("/", (req, res) => res.send("list users request"));

// PUT
usersRouter.put("/", async (req, res) => {
  await updateUser(req, res);
});

// POST
usersRouter.post("/", async (req, res) => {
  await createUser(req, res);
});

// DELETE
usersRouter.delete("/", async (req, res) => {
  await deleteUser(req, res);
});

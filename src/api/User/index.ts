import { Router } from "express";
import createUser from "./createUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";
import getUserById from "./getUserById";

export const usersRouter = Router();

// GET
usersRouter.get("/:id", async (req, res) => {
  await getUserById(req, res);
});

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

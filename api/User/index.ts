import { Router } from "express";
import createUser from "./createUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";
import getUserById from "./getUserById";
import listUsers from "./listUsers";

export const usersRouter = Router();

// GET
usersRouter.get("/:id", async (req, res) => {
  await getUserById(req, res);
});
usersRouter.get("/", async (req, res) => {
  await listUsers(req, res);
});

// PUT
usersRouter.put("/:id", async (req, res) => {
  await updateUser(req, res);
});

// POST
usersRouter.post("/", async (req, res) => {
  await createUser(req, res);
});

// DELETE
usersRouter.delete("/:id", async (req, res) => {
  await deleteUser(req, res);
});

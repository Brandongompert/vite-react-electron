import { int, text, mysqlTable } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
});
export type User = typeof users.$inferSelect; // return type when queried

export const assets = mysqlTable("assets", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
});
export type Asset = typeof assets.$inferSelect; // return type when queried

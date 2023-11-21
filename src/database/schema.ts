import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

// manage your schema

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});
export type User = typeof users.$inferSelect; // return type when queried

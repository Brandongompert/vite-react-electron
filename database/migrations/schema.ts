import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, text } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const assets = mysqlTable("assets", {
	id: int("id").autoincrement().notNull(),
	name: text("name"),
},
(table) => {
	return {
		assetsIdPk: primaryKey({ columns: [table.id], name: "assets_id_pk"}),
	}
});

export const users = mysqlTable("users", {
	id: int("id").autoincrement().notNull(),
	name: text("name"),
},
(table) => {
	return {
		usersIdPk: primaryKey({ columns: [table.id], name: "users_id_pk"}),
	}
});
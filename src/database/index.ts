import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// // for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient))

const queryClient = postgres({
  host: process.env.DB_HOST, // Postgres ip address[s] or domain name[s]
  port: process.env.DB_PORT as unknown as number, // Postgres server port[s]
  database: process.env.DB_NAME, // Name of database to connect to
  username: process.env.DB_USER, // Username of database user
  password: process.env.DB_PASSWORD, // Password of database user
});

console.log("queryClient", queryClient);

const db = drizzle(queryClient);

console.log("db", db);

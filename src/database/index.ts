import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// // for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient))

const queryClient = postgres({
  host: "localhost", // Postgres ip address[s] or domain name[s]
  port: 5432, // Postgres server port[s]
  database: "postgres", // Name of database to connect to
  username: "postgres", // Username of database user
  password: "Element911!", // Password of database user
});

console.log("queryClient", queryClient);

const db = drizzle(queryClient);

console.log("db", db);

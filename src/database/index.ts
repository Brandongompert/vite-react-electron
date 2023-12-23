import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { MySqlDatabase } from "drizzle-orm/mysql-core";

dotenv.config();

let dbPromise: Promise<MySqlDatabase<any, any, any, any>> | null = null; // Store the Promise

async function setupDatabaseConnection() {
  try {
    // Create a MySQL connection
    const queryClient = await mysql.createConnection({
      host: process.env.DB_HOST, // Postgres ip address[s] or domain name[s]
      port: process.env.DB_PORT as unknown as number, // Postgres server port[s]
      database: process.env.DB_NAME, // Name of database to connect to
      user: process.env.DB_USER, // Username of database user
      password: process.env.DB_PASSWORD, // Password of database user
    });

    // Initialize Drizzle ORM with the MySQL connection
    const db = drizzle(queryClient);

    // You can now use the 'db' object to interact with your MySQL database
    // For example, you can query the database, insert data, etc.

    console.log("Database connection established successfully.");

    return db; // Return the initialized Drizzle ORM instance if needed
  } catch (error) {
    console.error("Error connecting to the database:", error);
    // Handle the error appropriately
  }
}
// Function to initialize and return the database instance as a Promise
export async function getDbInstance() {
  if (!dbPromise) {
    dbPromise = setupDatabaseConnection().catch((error) => {
      console.error("Database connection error:", error);
      process.exit(1);
    });
  }
  return dbPromise;
}

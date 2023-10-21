import { Sequelize } from "sequelize";

export const connection = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

export async function initializeDatabase() {
  try {
    await connection.authenticate();
    await connection.sync();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

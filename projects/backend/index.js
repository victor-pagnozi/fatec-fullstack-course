import express from "express";
import { initializeDatabase } from "./config/database.js";

const app = express();
const port = 3000;

await initializeDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

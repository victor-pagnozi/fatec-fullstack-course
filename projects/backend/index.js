import express from "express";
import { initializeDatabase } from "./config/database.js";
import { Products } from "./models/products.js";

const app = express();
const port = 3000;

await initializeDatabase();

app.post("/products", async (req, res) => {
  try {
    const product = await Products.create({
      name: "Johnson",
      ingredients: "test test",
      price: 20,
    });

    // const product = await Products.destroy({
    //   where: {id: 1}
    // });

    return res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(400).json("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

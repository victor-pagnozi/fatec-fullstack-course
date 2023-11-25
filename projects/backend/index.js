import express from "express";
import { initializeDatabase } from "./config/database.js";
import { Products } from "./models/products.js";
import cors from 'cors';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

await initializeDatabase();

app.post("/products", async (req, res) => {
  console.log(req.body)
  try {
    const product = await Products.create({
      name: req.body.name,
      ingredients: req.body.ingredients,
      price: req.body.price,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Products.findAll();

    return res.status(200).json(products);
  } catch (err) { }
});

app.put('/products', async (req, res) => {
  try {
    const products = await Products.update();

    return res.status(200).json(products);
  } catch (err) { }
});

app.delete('/products/:id', async (req, res) => {
  try {
    await Products.destroy({
      where: { id: req.params.id }
    });

    res.status(200).json();
  } catch (err) {
    res.status(500).json(err)
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

const express = require("express");
const router = express.Router();
const ProductManager = require("../managers/product-manager.js");
const manager = new ProductManager("./src/data/productos.json");

router.ger("/products", async (req, res) => {
  const productos = await res.render("index", { productos });
});

router.get("/realtimeproducts", (req, res) => {
  res.render("realtimeproducts");
});

module.exports = router;

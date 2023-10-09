const express = require("express");
const {
  getAllProducts,
  craeteProduct,
  updateProduct,
  deleteProduct,
  getSingleProducts,
} = require("../controller/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getSingleProducts);
router.route("/product/new").post(craeteProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;

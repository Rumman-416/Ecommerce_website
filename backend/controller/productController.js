const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorhandler");
const catchasyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");

//create product--Admin
exports.craeteProduct = catchasyncError(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

//update products --Admin
exports.updateProduct = catchasyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ success: true, product });
});

//Delete product --Admin
exports.deleteProduct = catchasyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  product = await Product.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json({ success: true, message: "product deleted successfully" });
});
//Get products
exports.getAllProducts = catchasyncError(async (req, res) => {
  const resultPerPage = 5;

  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const getProduct = await apiFeatures.query;
  res.status(201).json({
    success: true,
    getProduct,
  });
});

//Get single product
exports.getSingleProducts = catchasyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({ success: true, product });
});

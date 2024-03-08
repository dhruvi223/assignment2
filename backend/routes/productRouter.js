const productController = require('../controller/productController')
const router = require("express").Router();
router.get("/",productController.getAllProduct )
router.get("/:id", productController.getOneProduct)
module.exports = router;
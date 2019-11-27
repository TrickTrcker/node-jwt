const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
router.get("/test",productController.test);
//create product route
router.get("/",productController.getall);
router.post("/create",productController.product_create);
router.get("/:id",productController.product_details);
router.put("/:id/update",productController.product_update);
router.get("/:id/delete",productController.delete_product);
module.exports=router;
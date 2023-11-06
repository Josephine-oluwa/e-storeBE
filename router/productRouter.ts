import express from "express"
import { createProduct, findAllProducts, findOneProduct, updateProductStock, updateProductToggle } from "../controller/productController"
import multer from "multer";



const  upload = multer().array("image", 4)

const Router = express.Router()

Router.route("/create-product").post(upload, createProduct)
Router.route("/find-all-products").get(findAllProducts)
Router.route("/find-one-product").get(findOneProduct)
Router.route("/update-product-stock").patch(updateProductStock)
Router.route("/update-toggle-product/:productID").patch(updateProductToggle);

export default Router 


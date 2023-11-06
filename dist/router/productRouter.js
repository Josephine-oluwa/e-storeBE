"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controller/productController");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)().array("image", 4);
const Router = express_1.default.Router();
Router.route("/create-product").post(upload, productController_1.createProduct);
Router.route("/find-all-products").get(productController_1.findAllProducts);
Router.route("/find-one-product").get(productController_1.findOneProduct);
Router.route("/update-product-stock").patch(productController_1.updateProductStock);
Router.route("/update-toggle-product/:productID").patch(productController_1.updateProductToggle);
exports.default = Router;

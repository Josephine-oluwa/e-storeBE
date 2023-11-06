"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductToggle = exports.updateProductStock = exports.findOneProduct = exports.findAllProducts = exports.createProduct = void 0;
const productModel_1 = __importDefault(require("../model/productModel"));
const stream_1 = require("../utils/stream");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, rating, cost, QTYinStock } = req.body;
        const product = yield productModel_1.default.create({
            title,
            rating: parseInt(rating),
            cost: parseInt(cost),
            QTYinStock,
            image: yield (0, stream_1.myStreamifier)(req)
        });
        return res.status(201).json({
            message: "product has been successfully created",
            data: product,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "was not able to create product",
            data: error.message
        });
    }
});
exports.createProduct = createProduct;
const findAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel_1.default.find();
        return res.status(200).json({
            message: "All Products Found",
            data: product
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "was not able to find all products",
            data: error.message
        });
    }
});
exports.findAllProducts = findAllProducts;
const findOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield productModel_1.default.findById(productId);
        return res.status(200).json({
            message: "one Product  has been Found",
            data: product
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "was not able to find one product",
            data: error.message
        });
    }
});
exports.findOneProduct = findOneProduct;
const updateProductStock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const { QTYPurchased } = req.body;
        const product = yield productModel_1.default.findById(productId);
        if (product) {
            let viewProduct = yield productModel_1.default.findByIdAndUpdate(productId, { QTYinStock: product.QTYinStock - QTYPurchased }, { new: true });
            return res.status(200).json({
                message: "one Product  has been Found",
                data: viewProduct
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "was not able to find one product",
            data: error.message
        });
    }
});
exports.updateProductStock = updateProductStock;
const updateProductToggle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const { toggle } = req.body;
        const product = yield productModel_1.default.findById(productId);
        if (product) {
            let toggleView = yield productModel_1.default.findByIdAndUpdate(productId, { toggle }, { new: true });
            return res.status(200).json({
                message: "one Product  has been Found",
                data: toggleView
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "was not able to find one product",
            data: error.message
        });
    }
});
exports.updateProductToggle = updateProductToggle;

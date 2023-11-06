"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productModel = new mongoose_1.default.Schema({
    title: {
        type: String
    },
    Image: {
        type: (Array)
    },
    cost: {
        type: String
    },
    rating: {
        type: Number
    },
    QTYinStock: {
        type: Number,
        default: 0
    },
    toggle: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model("product", productModel);

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
exports.mainApp = void 0;
const productRouter_1 = __importDefault(require("./router/productRouter"));
const mainApp = (app) => {
    app.use("/api", productRouter_1.default);
    try {
        app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return res.status(200).json({
                    message: "the api is up and connected"
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Error"
                });
            }
        }));
    }
    catch (error) {
        console.log(error);
    }
};
exports.mainApp = mainApp;

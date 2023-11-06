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
exports.mainConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// const Url: string = "mongodb+srv://josephine:josephine@cluster0.kckuw8r.mongodb.net/db?retryWrites=true&w=majority";
// const Url: string = "mongodb+srv://josephine:<josephine>@cluster0.sbaqntf.mongodb.net/db?retryWrites=true&w=majority";
const Url = "mongodb://0.0.0.0:27017/dbs";
const mainConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(Url).then(() => {
        console.log("DB has finally been connected");
    });
});
exports.mainConnection = mainConnection;
"mongodb+srv://josephine:<password>@cluster0.sbaqntf.mongodb.net/?retryWrites=true&w=majority";

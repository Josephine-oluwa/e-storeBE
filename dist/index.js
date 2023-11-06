"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const mainApp_1 = require("./mainApp");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 7878;
app.use(express_1.default.json({ limit: "20mb" }));
app.use((0, cors_1.default)({ origin: "*" }));
(0, mainApp_1.mainApp)(app);
const server = app.listen(port, () => {
    (0, db_1.mainConnection)();
    console.log("server is up and running");
});
process.on("uncaughtException", (error) => {
    console.log("sever is shutting down due to unCaught Exception", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("server is shutting down due to unHandled Rejection", reason);
    server.close(() => {
        process.exit(1);
    });
});

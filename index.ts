import express, { Application } from "express"
import { mainConnection } from "./config/db";
import { mainApp } from "./mainApp";
import cors from "cors";

const app: Application = express()
const port: number = 7878;

app.use(express.json({limit: "20mb"}));
    app.use(cors(
        {origin: "*"}
    ))

mainApp(app)

const server = app.listen(port, () => {
    mainConnection()
    console.log("server is up and running")
})

process.on("uncaughtException", (error: Error) => {
    console.log("sever is shutting down due to unCaught Exception", error)

    process.exit(1)
})

process.on("unhandledRejection", (reason: any) => {
    console.log("server is shutting down due to unHandled Rejection", reason)

   server.close(() => {
    process.exit(1)
   })
})
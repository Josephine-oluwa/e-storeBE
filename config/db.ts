import express from "express"
import mongoose from "mongoose";

// const Url: string = "mongodb+srv://josephine:josephine@cluster0.kckuw8r.mongodb.net/db?retryWrites=true&w=majority";
// const Url: string = "mongodb+srv://josephine:<josephine>@cluster0.sbaqntf.mongodb.net/db?retryWrites=true&w=majority";
const Url: string =  "mongodb://0.0.0.0:27017/dbs";

export const mainConnection = async () => {
    await mongoose.connect(Url).then(() => {
        console.log("DB has finally been connected")
    })
}

"mongodb+srv://josephine:<password>@cluster0.sbaqntf.mongodb.net/?retryWrites=true&w=majority"
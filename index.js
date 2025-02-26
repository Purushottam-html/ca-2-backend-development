import express from "express";
import mongoose from "mongoose";


const app = express()

app.use(express.json())

app.listen("5000" , () => {
    console.log("successfully listening on port 5000")
})
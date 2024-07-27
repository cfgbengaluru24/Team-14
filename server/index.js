import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req,res)=>{
    res.send("Success")
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started at port : ${PORT}`)
}) 
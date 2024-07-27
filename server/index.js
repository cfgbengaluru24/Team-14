import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoute from "./routes/AuthRoute.js"
import rbskRoutes from "./routes/rbskRoutes.js";
import doctorRoute from "./routes/doctorRoute.js"
import formRoutes from './routes/formRoutes.js';
import addDoctor from './routes/Adddoctor.js';
import messageRoutes from "./routes/MessageRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL)
    .then(() => { 
        console.log("DB connected successfully"); 
    })
    .catch((error) => console.log(`${error} did not connect`))

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
}) 

// middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

// routes
app.use("/api/auth", authRoute)
app.use('/api', rbskRoutes);
app.use('/api/doctor', doctorRoute);
app.use('/api', formRoutes);
app.use('/doctors', addDoctor);
app.use('/messages', messageRoutes);


app.get("/", (req,res)=>{
    res.send("Success")
})

app.listen(PORT, () => {
    console.log(`Server started at port : ${PORT}`)
}) 

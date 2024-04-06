import express from "express";
import cors from 'cors'
import { config } from 'dotenv'
import {connectDB} from './utils/db.js'
import userRouter from './Routes/user.js'
import cookieParser from 'cookie-parser'
// import { isAuthenticated } from "./Middlewares/auth.js";
const app=express();

config({
    path: "./utils/config.env",
})

//using middleware
app.use(express.json());  //to get access of json data

app.use(cookieParser());

//to get access of apis to other url
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST",],
    credentials: true,  //helps to send cookies
}))

connectDB();

//using router(use after express.json() -middleware)
app.use("/api/v1/users", userRouter);


app.get("/",(req, res) => {
    res.send("Nice")
})

app.listen(process.env.PORT, () => {
    console.log(`server is working on port:${process.env.PORT}`)
})




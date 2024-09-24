import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'
import cors from "cors";

dotenv.config()
const app = express();
app.use(cors(
    {
        origin:'http://localhost:5173'
    }
))
app.use(express.json())

const port = process.env.PORT || 5000;

mongoose.connect(process.env.URI).then(() =>
{   
    console.log("Database Connected Successfully");
    app.listen(port, (err) =>
    {
        if (err) console.log(err);
        else console.log("Server is running Succesfullly...");   
    })
}).catch((error) =>
{
    console.log("error",error);
    
})

app.use("/api",userRoute)

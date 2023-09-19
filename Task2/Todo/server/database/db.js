import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ieftyoi.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI,{useNewUrlParser: true})

    mongoose.connection.on('connected',()=>{
        console.log("Connected to Mongodb server");
    })

    mongoose.connection.on('disconnected',()=>{
        console.log("Disconnected to Mongodb server");
    })

    mongoose.connection.on('error',()=>{
        console.log("Error while connecting to Mongodb server", error.message);
    });
}

export default connection;
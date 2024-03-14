import mongoose from 'mongoose'
import {error} from "next/dist/build/output/log";

let isConnected = false; //track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    
    if (isConnected) {
        console.log("Mongodb is already to connected")
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'Share_prompt',
        })
        
        isConnected = true
        console.log("MongoDB connected")
    } catch (e) {
        console.log(e)
    }
}
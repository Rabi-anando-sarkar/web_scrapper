import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URI) return console.log('MONGO_URI is not defined!');

    if(isConnected) return console.log(' => using existing database connection');
    
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true
        console.log("Mongo Database Connected");
        
    } catch (error) {
        console.log(error);
        
    }
}
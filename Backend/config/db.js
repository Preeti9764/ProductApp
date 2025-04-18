import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://asyadav111979:hL2xR16PyiEpN5oI@cluster0.35l8xmz.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0");
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};
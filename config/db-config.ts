import mongoose from "mongoose";

export const db_config = async () => {
    // Check if the connection is already established
    if (mongoose.connection.readyState === 1) return;

    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL!, {
            dbName: process.env.DB_NAME,
            autoIndex: true,
        });

        if (connection.connection.readyState === 1) {
            console.log("Database connected successfully");
        }
    } catch (err) {
        console.error(err);
    }
}
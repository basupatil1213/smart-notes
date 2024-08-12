import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        default: "user",
    },
    verified: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
        default: "public/vercel.svg",
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
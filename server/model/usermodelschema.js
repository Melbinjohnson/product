import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Name is required"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    role: {
        type: String,
        default: "user"
    }
}, { timestamps: true }
)

const UserModel = mongoose.model("user_table", userschema)

export default UserModel
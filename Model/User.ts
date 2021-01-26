  
import { any, number } from "joi";
import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema ({
    ID: {
        type:any,
        required:true,
        min:6,
        max:255
    },
    name: {
        type:String,
        required:true,
        min:6,
        max:255
    },
    email: {
        type:String,
        required:true,
        min:6,
        max:255
    },
    created_at:{
        type:Date,
        required:true,
        min:6,
        max:1024
    }
})


const User = mongoose.model('User',userSchema);
export default User;


  
import { number } from "joi";
import mongoose, { mongo, Schema } from "mongoose";

const postSchema = new mongoose.Schema ({
    ID: {
        type:number,
        required:true,
        min:6,
        max:255
    },
    body: {
        type:String,
        required:true,
        min:6,
        max:255
    },
    image: {
        type:String,
        required:true,
        min:8,
        max:255
    },
    created_by:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
        min:6,
        max:1024
    },
    created_at:{
        type:Date,
        required:true,
        min:6,
        max:1024
    }
})

const Post = mongoose.model('Post',postSchema);
export default Post;


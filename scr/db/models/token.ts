import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    token:{
        type:String,
        requiredd: true
    }
})

export const token = mongoose.model('token', TokenSchema)
import mongoose from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
    }
})

export const User = mongoose.model('user', UserSchema)
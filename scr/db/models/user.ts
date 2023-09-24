import mongoose, { Model } from "mongoose";

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

export interface IUser{
    name:string
    password:string
    age:number
    email?:string
}

export const User:Model<IUser> = mongoose.model('user', UserSchema)

import { token } from "../db/models/token";
import { IUser, User } from "../db/models/user";
import bcrypt from "bcrypt"
import { ServiceException } from "../exceptions/service-exception";
import { Model } from "mongoose";

class UserServices{
    async getAllUsers(){
        const users = await User.find({})
        return users
    }
    async findUser(name:String){
        const user = await User.findOne({name:name})
        return user
    }

    async createUser(user: IUser){
        const userTest = await User.findOne({name:user.name})
        if(userTest?._id){throw new ServiceException(500, "User with this name already exist!!!")}
        const password = await this.createPassword(user.password)
        const newUser = new User({...user, password})
        newUser.save()
        return newUser
    }
    async createPassword(pass:string){
        const heshPass = bcrypt.hashSync(pass,10)
        return heshPass
    }
    async comparePass(pass:string, encrypted:string){
        const res = await bcrypt.compareSync(pass, encrypted )
        return res
    }
    userDTO(user:IUser){
        const userDTO = {name:user.name, age:user.age, email:user.email}
        return userDTO
    }
}

export default new UserServices
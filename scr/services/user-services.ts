import { token } from "../db/models/token";
import { IUser, User } from "../db/models/user";
import bcrypt from "bcrypt"
import { ServiceException } from "../exceptions/service-exception";

class UserServices{
    async getAllUsers(){
        const users = await User.find({})
        return users
    }
    async findUser(name:String){
        const user = await User.findOne({name:name})
        const id = user?._id
        // const Token = new token({
        //     user_id:id,
        //     token:'asdsadasdasdasdsad'
        // })
        // Token.save()
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
}

export default new UserServices
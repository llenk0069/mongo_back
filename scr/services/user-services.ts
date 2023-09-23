import { token } from "../db/models/token";
import { User } from "../db/models/user";

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
}

export default new UserServices
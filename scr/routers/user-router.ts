import { Router } from "express";
import { UserControllers } from "../controllers/user-controllers";
import { authCheck } from "../middlewares/auth";

const UserRouter = Router()
UserRouter.get('/allUsers',authCheck ,UserControllers.getUsers) //authCkeck
UserRouter.get('/findUser', UserControllers.findUser)
UserRouter.post('/login', UserControllers.login)
UserRouter.post('/create', UserControllers.createUser)


export default UserRouter
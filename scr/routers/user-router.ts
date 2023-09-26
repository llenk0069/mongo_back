import { Router } from "express";
import { UserControllers } from "../controllers/user-controllers";

const UserRouter = Router()
UserRouter.get('/allUsers', UserControllers.getUsers)
UserRouter.get('/findUser', UserControllers.findUser)
UserRouter.post('/login', UserControllers.login)
UserRouter.post('/create', UserControllers.createUser)

export default UserRouter
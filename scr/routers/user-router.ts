import { NextFunction, Request, Response, Router } from "express";
import tokenServices from "../services/token-services";
import { token } from "../db/models/token";
import { TokenControllers } from "../controllers/token-controllers";
import { UserControllers } from "../controllers/user-controllers";

const UserRouter = Router()
UserRouter.get('/allUsers', UserControllers.getUsers)
UserRouter.get('/findUser', UserControllers.findUser)

export default UserRouter
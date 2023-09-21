import { NextFunction, Request, Response, Router } from "express";
import tokenServices from "../services/token-services";
import { token } from "../db/models/token";
import { TokenControllers } from "../controllers/token-controllers";

const TokensRouter = Router()
TokensRouter.get('/tokens', TokenControllers.getTokens)

export default TokensRouter
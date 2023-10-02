import { NextFunction, Request, Response, Router } from "express";
import { TokenControllers } from "../controllers/token-controllers";

const TokensRouter = Router()
TokensRouter.get('/tokens', TokenControllers.getTokens)
TokensRouter.get('/refresh', TokenControllers.refresh)
TokensRouter.get('/userTokens', TokenControllers.getUserTokens)


export default TokensRouter
import { NextFunction, Request, Response, Router } from "express";
import { TokenControllers } from "../controllers/token-controllers";

const TokensRouter = Router()
TokensRouter.get('/tokens', TokenControllers.getTokens)

export default TokensRouter
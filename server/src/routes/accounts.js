import { Router } from "express";
import { createAccount, searchAccount } from "../controllers/accountController.js";
import authMiddleware from "../middlewares/users/authMiddleware.js";
import createAccountMiddleware from "../middlewares/accounts/createAccountMiddlewre.js";
import codeMiddleware from "../middlewares/accounts/codeMiddleware.js";
import searchAccountMiddleware from "../middlewares/accounts/searchAccountMiddleware.js";
import userRolMiddleware from "../middlewares/users/userRolMiddleware.js";

const accountRouter = Router();

accountRouter.post("/:auth_token", authMiddleware, createAccountMiddleware, codeMiddleware, createAccount);
accountRouter.get("/:auth_token", authMiddleware, userRolMiddleware, searchAccountMiddleware, searchAccount);

export default accountRouter;
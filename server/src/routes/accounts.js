import { Router } from "express";
import { createAccount, deleteAccount, editAccountName, searchAccount } from "../controllers/accountController.js";
import authMiddleware from "../middlewares/users/authMiddleware.js";
import createAccountMiddleware from "../middlewares/accounts/createAccountMiddlewre.js";
import codeMiddleware from "../middlewares/accounts/codeMiddleware.js";
import searchAccountMiddleware from "../middlewares/accounts/searchAccountMiddleware.js";
import userRolMiddleware from "../middlewares/users/userRolMiddleware.js";
import accountDataMiddleware from "../middlewares/accounts/accountDataMiddleware.js";
import deleteAccountMiddleware from "../middlewares/accounts/deleteAccountMiddleware.js";
import editAccountDataMiddleware from "../middlewares/accounts/editAccountDataMiddleware.js";

const accountRouter = Router();

accountRouter.post("/:auth_token", authMiddleware, createAccountMiddleware, codeMiddleware, createAccount);

accountRouter.get("/:auth_token", authMiddleware, userRolMiddleware, searchAccountMiddleware, searchAccount);

accountRouter.delete("/:auth_token", authMiddleware, accountDataMiddleware, deleteAccountMiddleware, deleteAccount);

accountRouter.patch("/:auth_token", authMiddleware, editAccountDataMiddleware, editAccountName)

export default accountRouter;
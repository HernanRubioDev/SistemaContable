import { Router } from "express";
import authMiddleware from "../../middlewares/users/authMiddleware.js";
import createAccount from "../../controllers/accountController.js";
import createAccountMiddleware from "../../middlewares/accounts/createAccountMiddlewre.js";
import codeMiddleware from "../../middlewares/accounts/codeMiddleware.js";

const accountRouter = Router();

accountRouter.post("/:auth_token", authMiddleware, createAccountMiddleware, codeMiddleware, createAccount);

export default accountRouter;
import { Router } from "express";
import {logOutUser, loginUser, registerUser} from '../../controllers/userController.js'
import registerMiddleware from "../../middlewares/users/registerMiddleware.js";
import authMiddleware from "../../middlewares/users/authMiddleware.js";
import loginMiddleware from "../../middlewares/users/loginMiddleware.js";

const userRouter = Router();

userRouter.post("/register", registerMiddleware ,registerUser);

userRouter.post("/login", loginMiddleware ,loginUser);

userRouter.delete("/logout/:email/:auth_token", authMiddleware, logOutUser);

export default userRouter;
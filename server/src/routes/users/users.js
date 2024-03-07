import { Router } from "express";
import {logOutUser, loginUser, registerUser} from '../../controllers/userController.js'
import registerMiddleware from "../../middlewares/users/registerMiddleware.js";
import userRolMiddleware from "../../middlewares/users/adminRolMiddleware.js";
import authMiddleware from "../../middlewares/users/authMiddleware.js";
import adminRolMiddleware from "../../middlewares/users/adminRolMiddleware.js";

const userRouter = Router();

userRouter.post("/register", registerMiddleware ,registerUser);

userRouter.post("/login", loginUser);

userRouter.delete("/logout/:email/:auth_token", authMiddleware, logOutUser);

export default userRouter;
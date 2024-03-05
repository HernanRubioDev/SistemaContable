import { Router } from "express";
import {logOutUser, loginUser, registerUser} from '../../controllers/userController.js'
import registerMiddleware from "../../middlewares/users/registerMiddleware.js";

const userRouter = Router();

userRouter.post("/register", registerMiddleware ,registerUser);

userRouter.post("/login", loginUser);

userRouter.delete("/logout", logOutUser);

export default userRouter;
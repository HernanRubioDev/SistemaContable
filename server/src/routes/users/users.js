import { Router } from "express";
import {registerUser} from '../../controllers/userController.js'
import registerMiddleware from "../../middlewares/users/registerMiddleware.js";

const userRouter = Router();

userRouter.post("/register", registerMiddleware ,registerUser);

export default userRouter;
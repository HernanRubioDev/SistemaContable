import { Router } from "express";
import authMiddleware from "../middlewares/users/authMiddleware.js";
import { createMovement, searchMovementByDates } from "../controllers/movementController.js";
import searchMovementMiddleware from "../middlewares/movements/searchMovementMiddleware.js";
import createMovementMiddleware from "../middlewares/movements/createMovementMiddleware.js";
import foundCheckMiddleware from "../middlewares/movements/foundCheckMiddleware.js";

const movementRouter = Router();

movementRouter.post("/:auth_token", authMiddleware, createMovementMiddleware, foundCheckMiddleware, createMovement)

movementRouter.get("/:auth_token", authMiddleware, searchMovementMiddleware, searchMovementByDates)

export default movementRouter
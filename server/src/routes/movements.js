import { Router } from "express";
import authMiddleware from "../middlewares/users/authMiddleware.js";
import { createMovement, searchMovementByDates } from "../controllers/movementController.js";
import searchMovementMiddleware from "../middlewares/movements/searchMovementMiddleware.js";
import createMovementMiddleware from "../middlewares/movements/createMovementMiddleware.js";

const movementRouter = Router();

movementRouter.post("/:auth_token", authMiddleware, createMovementMiddleware, createMovement)

movementRouter.get("/:auth_token", authMiddleware, searchMovementMiddleware, searchMovementByDates)

export default movementRouter
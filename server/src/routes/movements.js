import { Router } from "express";
import authMiddleware from "../middlewares/users/authMiddleware.js";
import { createMovement, searchMovementByDates } from "../controllers/movementController.js";
import searchMovementMiddleware from "../middlewares/movements/searchMovementMiddleware.js";

const movementRouter = Router();

movementRouter.post("/:auth_token", authMiddleware, createMovement)

movementRouter.get("/:auth_token", authMiddleware, searchMovementMiddleware, searchMovementByDates)

export default movementRouter
import { Router } from "express";
import { authController } from "../controllers/authController";
export const authRouter = Router();

authRouter.post("/signup", authController.signUp);
authRouter.post("/login", authController.login);
authRouter.get("/logout", authController.logout);
import { Router } from "express";
import { indexController } from "../controllers/indexController";
export const indexRouter = Router();

// *add auth middleware*
indexRouter.get('/posts', indexController.getPosts);

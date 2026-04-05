import { Router } from "express";
import { indexController } from "../controllers/indexController";
export const indexRouter = Router();

// *add auth middleware*
indexRouter.get('/', indexController.getPosts);
indexRouter.post('/', indexController.createPost);
indexRouter.update('/:id', indexController.updatePost);


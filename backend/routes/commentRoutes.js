import express from "express";
const router = express.Router();
import { authGuard } from "../middleware/authMiddleware";
import { createComment } from "../controllers/commentControllers";

router.post("/", authGuard, createComment);

export default router;

import express from "express";
import { loginUser, registerUser, userProfile } from "../controllers/userController";
import { authGuard } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);

export default router;

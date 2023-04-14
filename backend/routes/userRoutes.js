import express from "express";
import {
  loginUser,
  registerUser,
  updateProfile,
  updateProfilePicture,
  userProfile,
} from "../controllers/userController";
import { authGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture); 

export default router;

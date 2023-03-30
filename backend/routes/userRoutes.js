import express from "express";
import {
  loginUser,
  registerUser,
  updateProfile,
  updateProfilePicture,
  userProfile,
} from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", userProfile);
router.put("/updateProfile", updateProfile);
router.put("/updateProfilePicture", updateProfilePicture);

export default router;

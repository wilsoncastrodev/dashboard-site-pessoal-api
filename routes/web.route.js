import express from "express";
import { uploadFile, uploadImage } from '../utils/uploads.js';
import auth from "../middlewares/auth.middleware.js"
import AuthController from "../controllers/auth.controller.js";
import ProfileController from "../controllers/profile.controller.js";
import InterestController from "../controllers/interest.controller.js";

const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.get("/profiles/:id", auth, ProfileController.getProfileById);
router.patch("/profiles/:id", uploadFile('profile', 'name'), auth, ProfileController.updateProfile);

export default router;
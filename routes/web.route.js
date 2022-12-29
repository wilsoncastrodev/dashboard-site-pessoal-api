import express from "express";
import AuthController from "../controllers/auth.controller.js";
import ProfileController from "../controllers/profile.controller.js";

const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.get("/profiles/:id", ProfileController.getProfileById);

export default router;
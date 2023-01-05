import express from "express";
import { uploadFile, uploadImage } from '../utils/uploads.js';
import auth from "../middlewares/auth.middleware.js"
import AuthController from "../controllers/auth.controller.js";
import ProfileController from "../controllers/profile.controller.js";
import EducationController from "../controllers/education.controller.js";
import InterestController from "../controllers/interest.controller.js";

const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.get("/profiles/:id", auth, ProfileController.getProfileById);
router.patch("/profiles/:id", uploadFile('profile', 'name'), auth, ProfileController.updateProfile);

router.get("/educations", auth, EducationController.getAllEducation);
router.get("/educations/:id", auth, EducationController.getEducationById);
router.post('/educations', auth, EducationController.createEducation);
router.patch('/educations/:id', auth, EducationController.updateEducation);
router.delete('/educations/:id', auth, EducationController.deleteEducation);

export default router;
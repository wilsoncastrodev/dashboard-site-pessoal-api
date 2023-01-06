import express from "express";
import { uploadFile, uploadImage } from '../utils/uploads.js';
import auth from "../middlewares/auth.middleware.js"
import AuthController from "../controllers/auth.controller.js";
import ProfileController from "../controllers/profile.controller.js";
import EducationController from "../controllers/education.controller.js";
import ExperienceController from "../controllers/experience.controller.js";
import InterestController from "../controllers/interest.controller.js";
import SourcesKnowledgeController from "../controllers/sourcesKnowledge.controller.js";
import CategorySkillController from "../controllers/categorySkill.controller.js";
import SkillController from "../controllers/skill.controller.js";
import CategoryKnowledgeController from "../controllers/categoryKnowledge.controller.js";

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

router.get("/experiences", auth, ExperienceController.getAllExperience);
router.get("/experiences/:id", auth, ExperienceController.getExperienceById);
router.post('/experiences', auth, ExperienceController.createExperience);
router.patch('/experiences/:id', auth, ExperienceController.updateExperience);
router.delete('/experiences/:id', auth, ExperienceController.deleteExperience);

router.get("/interests", auth, InterestController.getAllInterest);
router.get("/interests/:id", auth, InterestController.getInterestById);
router.post("/interests/", uploadImage('interests', 'content'), auth, InterestController.createInterest);
router.patch('/interests/:id', uploadImage('interests', 'content'), auth, InterestController.updateInterest);
router.delete('/interests/:id', auth, InterestController.deleteInterest);

router.get("/sources-knowledge", auth, SourcesKnowledgeController.getAllSourcesKnowledge);
router.get("/sources-knowledge/:id", auth, SourcesKnowledgeController.getSourcesKnowledgeById);
router.post("/sources-knowledge/", uploadImage('sources-knowledge', 'name'), auth, SourcesKnowledgeController.createSourcesKnowledge);
router.patch('/sources-knowledge/:id', uploadImage('sources-knowledge', 'name'), auth, SourcesKnowledgeController.updateSourcesKnowledge);
router.delete('/sources-knowledge/:id', auth, SourcesKnowledgeController.deleteSourcesKnowledge);

router.get("/category-skills", auth, CategorySkillController.getAllCategorySkill);
router.get("/category-skills/:id", auth, CategorySkillController.getCategorySkillById);
router.post("/category-skills/", auth, CategorySkillController.createCategorySkill);
router.patch('/category-skills/:id', auth, CategorySkillController.updateCategorySkill);
router.delete('/category-skills/:id', auth, CategorySkillController.deleteCategorySkill);

router.get("/skills", auth, SkillController.getAllSkill);
router.get("/skills/:id", auth, SkillController.getSkillById);
router.post("/skills/", auth, SkillController.createSkill);
router.patch('/skills/:id', auth, SkillController.updateSkill);
router.delete('/skills/:id', auth, SkillController.deleteSkill);

router.get("/category-knowledge", auth, CategoryKnowledgeController.getAllCategoryKnowledge);
router.get("/category-knowledge/:id", auth, CategoryKnowledgeController.getCategoryKnowledgeById);
router.post("/category-knowledge/", auth, CategoryKnowledgeController.createCategoryKnowledge);
router.patch('/category-knowledge/:id', auth, CategoryKnowledgeController.updateCategoryKnowledge);
router.delete('/category-knowledge/:id', auth, CategoryKnowledgeController.deleteCategoryKnowledge);

export default router;
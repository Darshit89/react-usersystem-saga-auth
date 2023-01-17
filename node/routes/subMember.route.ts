import express from "express";
import { authenticate } from "../middleware/authenticate";
const router = express.Router();

const subMemberController = require("../controllers/subMember.controller");

router.post("/subMember/create", authenticate, subMemberController.createMember);
router.post("/subNonMember/create", authenticate, subMemberController.createNonMember);

export { router as SubMemberRoutes };

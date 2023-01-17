import express from "express";
import { authenticate } from "../middleware/authenticate";

const router = express.Router();

const memberController = require("../controllers/member.controller");

router.post("/member/create", authenticate, memberController.create);
router.get("/member", authenticate, memberController.getMember);
router.get("/member/:id", authenticate, memberController.getMemberById);

export { router as MemberRoutes };
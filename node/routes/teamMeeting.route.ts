import express from "express";
import { authenticate } from "../middleware/authenticate";
const router = express.Router();

const teamMeetingController = require("../controllers/teamMeeting.controller");

router.post("/teamMeeting/create", authenticate, teamMeetingController.create);
router.get("/teamMeeting", authenticate, teamMeetingController.getTeamMeeting);
router.get("/teamMeeting/:id", authenticate, teamMeetingController.getTeamMeetingById);

export { router as TeamMeetingRoutes };
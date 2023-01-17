import express from "express";
import { authenticate } from "../middleware/authenticate";
const router = express.Router();

const activityController = require("../controllers/activity.controller");

router.post("/activity/create", authenticate, activityController.createActivityReport);
router.get("/activity", authenticate, activityController.getActivity);
router.get("/activity/:id", authenticate, activityController.getActivityById);

export { router as ActivityRoutes };

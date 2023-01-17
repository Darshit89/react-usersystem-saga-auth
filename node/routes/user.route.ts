import express from "express";
const router = express.Router();

const userController = require("../controllers/user.controller");

router.post(
  "/login",
  userController.login
);

export { router as UserRoutes };
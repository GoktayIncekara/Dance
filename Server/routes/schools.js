import express from "express";

import { getSchools, addSchool, getSchool } from "../controllers/schools.js";

const router = express.Router();

router.get("/", getSchools);
router.get("/:id", getSchool);
router.post("/addSchool", addSchool);

export default router;

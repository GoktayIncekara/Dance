import express from "express";

import { getSchools, addSchool } from "../controllers/schools.js";

const router = express.Router();

router.get("/", getSchools);
router.post("/add_school", addSchool);

export default router;

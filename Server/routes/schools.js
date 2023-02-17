import express from "express";

import { getSchools } from "../controllers/schools.js";

const router = express.Router();

router.get("/", getSchools);

export default router;

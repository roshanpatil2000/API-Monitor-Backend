import { Router } from "express";
import { healthCheck } from "../controllers/health.controller";

export const healthRoute = Router();

healthRoute.get("/", healthCheck)
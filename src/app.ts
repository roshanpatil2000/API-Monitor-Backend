import express, { Application } from "express";
import { healthRoute } from "./routes/health.route";

export const app: Application = express();

// Middleware
app.use(express.json());



app.use("/health", healthRoute)

import dotenv from "dotenv"
dotenv.config()
import { app } from "./app";
import "./db";

const PORT = process.env.PORT || 29012;

app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
});
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import studentRoutes from "./routes/student.js";
import eventRoutes from "./routes/event.js";

dotenv.config();
const app = express();
app.use(express.json({limit:"10mb"}));
app.use(cors());
app.use(express.static("public"));

app.use("/api/student", studentRoutes);
app.use("/api/event", eventRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

import mongoose from "mongoose";

export default mongoose.model("Event", new mongoose.Schema({
  title: String,
  limit: Number,
  createdAt: { type: Date, default: Date.now }
}));

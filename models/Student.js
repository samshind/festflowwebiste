import mongoose from "mongoose";

export default mongoose.model("Student", new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  event: String,
  qrCode: String,
  createdAt: { type: Date, default: Date.now }
}));

import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.post("/add", async(req,res)=>{
  const ev = await Event.create(req.body);
  res.json(ev);
});

router.get("/all", async(req,res)=>{
  res.json(await Event.find());
});

export default router;

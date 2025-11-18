import express from "express";
import QRCode from "qrcode";
import PDFDocument from "pdfkit";
import Student from "../models/Student.js";

const router = express.Router();

router.post("/register", async(req,res)=>{
  try{
    const {name,email,phone,event} = req.body;
    const qrData = `${name}-${email}-${event}`;
    const qrImage = await QRCode.toDataURL(qrData);

    const student = await Student.create({name,email,phone,event,qrCode:qrImage});

    res.json({success:true, student});
  }catch(e){
    res.json({success:false,error:e.message});
  }
});

router.get("/all", async(req,res)=>{
  res.json(await Student.find());
});

export default router;

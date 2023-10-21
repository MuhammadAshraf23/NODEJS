import express from "express"
import { PRODUCTS } from "../constant/index.js";
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send({status:200,product:PRODUCTS})
})

export default router;
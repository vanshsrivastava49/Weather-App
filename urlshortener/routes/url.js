const express=require('express');
const {generateShort}=require("../controllers/url");
const router=express.Router();
router.post("/",generateShort);
module.exports=router;
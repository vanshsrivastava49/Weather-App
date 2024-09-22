const express=require("express");
const {connectMongo}=require("./connect");
const urlRoute=require("./routes/url");
const URL=require('./models/url')
const app=express();
const PORT=4310;
connectMongo("mongodb://localhost:27017/easy-url").then(()=>
    console.log('MongoDB connected')
);
app.use(express.json);
app.use("/url",urlRoute);
app.get(':shortId',(req,res)=>{
    const shortId=req.params.shortId;
    const entry=async URL.findOneAndUpdate({
        shortId,
    },
    {
        $push:{
        visitHistory:{
            timestamp:Date.now(),
        },
    },
},)
})
app.listen(PORT,()=>console.log(`Server Started at Port:${PORT}`));
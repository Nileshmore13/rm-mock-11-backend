const express= require("express");
const cors = require("cors");
const { connection } = require("./Config/db");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Home")
});

app.listen(8000, async ()=>{
    try{
        await connection;
        console.log({"msg":"connected to mongodb atlas successfull"});
    }
    catch(err){
        console.log(err);
        console.log({"msg":"error while connecting to atlas db"});
    }
    console.log("Listrning on port 8000");
})
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , "public")));
app.set("view engine" , "ejs");

app.get("/" , (req,res)=>{
    try{
        res.render("index");
    }catch(err){
        res.render("error" , {msg : error});
    }
});

app.listen(PORT);
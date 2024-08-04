var myexpress = require("express");
var app = myexpress();
var port=8000;
app.get("/",(req,res)=>{
    res.send("Hello World form ExpressJs : RAM")
});
app.get("/home",(req,res)=> {
    res.send("Display form home Page: :RAM")
});
app.get("/about",(req,res)=> {
    res.send("Display form about Page: :RAM")   
});
app.get("/contactus",(req,res)=> {
    res.send("Display form contact Page: :RAM")
});
app.listen(port,()=> {
    console.log("Running on port 8000")
});

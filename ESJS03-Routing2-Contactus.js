var myexpress = require("express");
var app = myexpress();
var port=8000;
app.get("/",(req,res)=>{
    res.send("Hello World form ExpressJs : RAM")
});
app.get("/contactus",(req,res)=> {
    res.send("Display form contactus Page: :RAM")   
});
app.listen(port,()=> {
    console.log("Running on port 8000")
});

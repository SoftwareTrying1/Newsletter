const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);
});

app.listen(process.env.PORT || 3000,function(){
    console.log("server started on port:3000");
});



// API Key
// 5dc8f3d02d9b098b128e2f1ebc9ee696-us9


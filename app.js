const express = require("express");
const fs = require("fs");
const { dirname } = require("path");
const { execPath } = require("process");
const jsonParser = express.json();

const filePath = 'database/data.json';

let dataColors = fs.readFileSync(filePath, "utf8");
let content = JSON.parse(dataColors);

let app = express();
app.use(express.static('staticFiles'));
app.use(express.static('staticFilesTwo'));
app.use(express.static('database'))
app.get("/backGroundColors", jsonParser, (req, res) => {
    let user = {name: "userName", age: "userAge"};
    res.send(content) 
})


let count = 0;

app.post("/user/pos", jsonParser, (req, res) => {
   let data = req.body;
   let path = fs.readFileSync("user1.json")
   let result = [{}];
   let users;
   let count = 0;
   
      
      users = JSON.parse(path);
         users.forEach((e) => {
         if(e.id == data.id) {
            console.log(result + "40")
            result[e.id - 1] = {posX: data.posX, posY: data.posY,score: data.score, id: data.id};
         }
         else if(e.id != users.id){
         result[e.id - 1] = {posX: e.posX, posY:e.posY, score: e.score, id: e.id };
           }
      });


   fs.writeFileSync("user1.json", JSON.stringify(result));
 
   res.send(JSON.stringify(users));
 });


app.use("/lvl1", (req, res) => {
   res.sendFile(__dirname + "/staticFiles/index.html")
})


app.use("/lvl2", (req, res)=> {
    res.sendFile(__dirname + '/staticFilesTwo/indexTwo.html')
 })

app.listen(3000);
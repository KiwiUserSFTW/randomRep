const express = require("express");
const fs = require("fs");
const { dirname } = require("path");
const { execPath } = require("process");
const jsonParser = express.json();

const filePath = 'database/data.json';

let dataColors = fs.readFileSync(filePath, "utf8");
let content = JSON.parse(dataColors);
let app = express();
app.use(express.static('lobby'));
app.use(express.static('staticFiles'));
app.use(express.static('staticFilesTwo'));
app.use(express.static('database'))
app.get("/backGroundColors", jsonParser, (req, res) => {
    let user = {name: "userName", age: "userAge"};
    res.send(content) 
})

 app.use("/lvl2", (req, res)=> {
    res.sendFile(__dirname + '/staticFilesTwo/indexTwo.html')
 })

 app.use("/lvl1", (req, res) => {
    res.sendFile(__dirname + "/staticFiles/index.html")
 })

app.use("/lobby", (req, res) => {

res.sendFile(__dirname + "/lobby/indexLobby.html");
}).listen(3000);
 

const express = require ("express");
const socket = require ("socket.io");
const http = require ("http");
const {Chess}= require ("chess.js");
const path = require ("path");


const app = express();
const server = http.createServer(app);

const io = socket(server);

const chess = new Chess();
let player={};

let currentPlayer ="W";

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.render("index",{title:"Chess Master"});
});

server.listen(3000,function(){
    console.log("server is running in port 3000..!!!");
});
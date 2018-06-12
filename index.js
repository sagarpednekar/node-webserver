/*
Craeting web server using node


const http = require("http");
const host = "127.0.0.1";
const port = 3200;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/plain');
    res.end('Hello World\n');
});
server.listen(port,host, ()=>  {
    console.log(`Server Running on http://${host}:${port}`);
})
*/



// Require express step-1
const express = require("express");
const app = express();
const alert = require("./welcome_messages");
let welcome ='';
console.log(alert["messages"]);
for (let index = 0; index < alert['messages'].length; index++) {
    welcome += alert["messages"][index] + "</br>";
}

// make requests step2 
app.get("/",(request,response) =>{
    response.send(welcome );
});

// listen on port step-3
app.listen(3200,function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log("Listening to port 3000");
    }
});
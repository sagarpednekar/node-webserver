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
const fs = require("fs");
const bodyParser = require("body-parser");
const alert = require("./welcome_messages");

let welcome ='';
console.log(alert["messages"]);
for (let index = 0; index < alert['messages'].length; index++) {
    welcome += alert["messages"][index] + "</br>";
}

// make requests step2 
// app.get("/",(request,response) =>{
//     response.send(welcome );
// });


// making user request
app.get('/user/:name',(request,response)=>{
    response.send("Welcome "+ request.params.name);
});

// using body parser
// You need to use bodyParser() if you want the form data to be available in req.body.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// define root path
app.use(express.static(__dirname + '/'));


app.get('/',function (request,response) {
    fs.readFile(__dirname + '/index.html',function(err,data){
        if (!err) {
            response.write(data);
        }
        response.end();//stop looking for response
    })
    
});

app.post("/status/new",function (request,response) {
    fs.writeFile(__dirname +"/posts.json",JSON.stringify({
        "name" : request["body"]["name"],
        "status" : request["body"]["status"]})
    , function (error) {
       if(error)console.log(error);    
    })
});
app.get('/status',function (request,response) {
    fs.readFile(__dirname + '/posts.json',function(err,data){
        if (!err) {
            response.send(JSON.parse(data));
        }
        console.log(err); 
        //response.end();//stop looking for response

    })
    
});

// listen on port step-3
app.listen(3200,function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log("Listening to port 3000");
    }
});
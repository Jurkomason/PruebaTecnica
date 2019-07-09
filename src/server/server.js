import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

let port=8888;
let app=express();

app.listen(port,console.log("Escuchando el servidor por el puerto: ", port));

app.get('/',(req,res)=>{
    res.send("Hello world");
});

var request = require("request");
request.get("https://reqres.in/api/users?page=2", function (err, res, body) {
    if (!err) {
        var resultsObj = JSON.parse(body);
        //Just an example of how to access properties:
        console.log(resultsObj);
    }
});

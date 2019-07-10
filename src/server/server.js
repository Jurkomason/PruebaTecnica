import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

let port= process.env.PORT || 8888;
let app=express();

app.listen(port,console.log("Escuchando el servidor por el puerto: ", port));

if(process.env.NODE_ENV=='production'){
    app.use(express.static(path.resolve(__dirname,'../../dist')))
    app-get('/*',(req,res)=>{
        res.sendFile(path.resolve(index.html));
    });
}


var request = require("request");
    app.get('/',(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        request("https://reqres.in/api/users?page=2", function (err, body) {
            if (!err) {
                var ultrabody=JSON.parse(body.body);
                var response={
                    users: ultrabody.data,
                }
                res.send(response);   
            }
            else{
                res.send(err);
            }
        });
    });

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);



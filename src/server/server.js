import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

let port=8888;
let app=express();

app.listen(port,console.log("Escuchando el servidor por el puerto: ", port));

var request = require("request");
    app.get('/',(req,res)=>{
        
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



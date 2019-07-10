import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {usersRoute} from './users';

let port=8888;
let app=express();

app.listen(port,console.log("Escuchando el servidor por el puerto: ", port));

usersRoute(app);

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);



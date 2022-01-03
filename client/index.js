import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


// components
import Connection from '../server/connection/db.js';
import DefaultData from '../server/default.js';
import Route from '../server/routes/route.js';
const app=express();

app.use('/', Route);
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json({extended:true}))

app.use(cors());


const PORT = 8001;


Connection();

app.listen(PORT,()=> console.log('server is running successfully on PORT $(PORT)'));

DefaultData();
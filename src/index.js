require('dotenv').config
const express = require("express");
const {default: servidor}=require('./routes/server');
const {default: routes}=require('./routes/routes');


const corpo = express();
corpo.use(express.json());
corpo.use(routes);
corpo.use(servidor);


const Rota=process.env.PORTA

corpo.listen(8080,()=>console.log(`servidor no end : http://localhost:${8080}`));

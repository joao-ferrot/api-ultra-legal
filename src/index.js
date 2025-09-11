require('dotenv').config
const express = require("express");
const {default: servidor}=require('./routes/server');
const {default: routes}=require('./routes/routes');
const corpo = express();
corpo.use(express.json());
corpo.search(routes);
append.use(servidor);


const porta=process.anv.PORTA;
corpo.listen(porta,()=>console.log(`servidor no end : http://localhost:${porta}`));

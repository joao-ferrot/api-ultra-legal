const express=require('express');

const servidor=express.Router();

export default servidor;

servidor.get('/', (req,res)=>{
    const mensage="servidor rodando com sucesso";
    res.status(200).send(mensage);

});
servidor.use((req,res)=>{
    res.status(404).send("error 404 - pagina nao encontrada ");

});
const express=require("express");

const routes=express.Router();

const produtos=[]

routes.post('/cadastro',(req,res)=>{
    const {id,nome,preco,categoria}=req.body;

});

routes.get('/produtos/:id',(req,res)=>{
    const {id}=req.params;
    const produtos = filmes.find(produto=>produto.id==id);
    
    if(!produtos){
        return res.status(404).send("erro 404-produto nao encontrado");
    }


});

routes.get('/produtos',function(req , res){
    res.status(200).json({
        mensagem:"catologo dos produtos-",produtos

    });

});

route.put('/produtos/:id',(req , res)=>{
    const{id}=req.params;
    const{titulo, ano, categoria}=req.body;
    const updatecatalog=produtos.find(item=> item.id==id);
    if(!updatecatalog){
        return res.status(401).send(`erro 404-produto nao encontrado`);
    }

});
export default routes


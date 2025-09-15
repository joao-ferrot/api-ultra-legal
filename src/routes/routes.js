const express=require("express");

const routes=express.Router();

const produtos=[]

routes.post('/cadastro',(req,res)=>{

    
    const {id,nome,preco,categoria}=req.body;

   
    /* if(!id || !nome || !preco || !categoria){
        return res.status(400).send("criterios de cadastrametos esta  incompleto")
    } */
      produtos.push({id,nome,preco,categoria});
         res.status(201).send('produto criado com sucesso')

});



routes.get('/produtos',(req,res)=>{
    const {categoria,}=req.query;
     /* const produtosEncontrar=produtos.filter(item=> item.categoria==categoria); */
     /* const lista=categoria.filter(item=> item.categoria==categoria) */
    
    if(!categoria && !nome){
        return res.status(400).send({mensagem:"informe ao menos a categoria que desejas , para ter acesso a lista  digite na url 'categorias'"});

         };


         if(categoria=="categorias"){
            const lista=[...new Set(produtos.map(item => item.categoria))];
            
            res.status(200).json({categoria:[item => item.categoria]});
        };

 

    
    res.status(200).send({produtos});
/* const mesage="lista  de produtos"
    res.status(200).json({mensagem:"catologo dos produtos- ${lista}"}); */
});

routes.put('/produtos/:id',(req , res)=>{
    const{id}=req.params;
    const {nome,preco,categoria}=req.body;
    const updatecatalog=produtos.find(item=> item.id==id);
    if(!updatecatalog){
        return res.status(401).send(`erro 404-produto nao encontrado`);
    }
    if(!nome || nome.trim()==""){
        res.status(400).send("nome do produto nao pode ser vazio");
    }
    updatecatalog.nome=nome;
    updatecatalog.preco=preco;
    updatecatalog.categoria=categoria;

    res.status(200).send('produto atualizado com sucesso!');
});

routes.delete("/produtos/:id",(req,res)=>{
    const{id}=req.params
    const excluirProduto=produtos.findIndex(item=>item.id==id);

    if(excluirProduto===-1){
        return res.status(404).send("error 4040 produto nao existe.")
    }
    produtos.splice(excluirProduto,(excluirProduto,1));

    res.status(200).send("produto excluido");
});

export default routes;


const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');




const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let usuario=models.Usuario;
let empresa=models.Empresa;


app.post('/login', async (req,res)=>{
    let response=await  usuario.findOne({
        where: {login:req.body.user, senha: req.body.pass}
    });
    if(response === null) {
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.post('/createEmpresa', async(req,res)=>{
       await empresa.create({
        razaoSocial: req.body.razao,
        fantasia:req.body.nomeFantasia,
        cpfCnpj:req.body.documento
    });
});

app.get('/listEmpresa', async (req,res)=>{
    const empresas = await empresa.findAll({
    });
    console.log(empresas);
});


/*app.get('/create', async (req,res) =>{
    let create=await usuario.create({
       login: "Andre" ,
       senha: "123",
       empresaId: 1,
       createAt: new Date(),
       updatedAt: new Date()             
    });
    res.send('Usuario criado com sucesso');
});*/

let port=process.env.PORT || 3000;
app.listen(port,(req,res) => {
    console.log('Servidor Rodando')
});
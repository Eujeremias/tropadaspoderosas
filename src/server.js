import express from "express";

const app = express();
const PORT = 3000;
let idIncrement = 1



const event = [
    {id: idIncrement++, titutlo: "Festa na ARSAL", descricao: "leve seu prato", vagas: 5, vagasDisponiveis: 3, modalidade: "Presencial", cargaHoraria: 5, ativo: true, dataCriacao: "12/12/2222"},
    {id: idIncrement++, titutlo: "Bebedeira na ARSAL", descricao: "Leve seu copo", vagas: 2, vagasDisponiveis: 2, modalidade: "Hibrido", cargaHoraria: 3, ativo: false, dataCriacao: "11/11/1111"},
];

// Lista todos os eventos
app.get("/",(req, res)=>{
    res.json(event)
})


// Lista evento especifico
app.get("/:id",(req,res)=>{
    event.map((elemento)=>{
        if(elemento.id == req.params.id){
            res.json(elemento)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Servidor ligado na porta ${PORT}`);
})
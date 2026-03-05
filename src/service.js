import express from "express";

import { EventosDatabase } from "./database/eventosDataBase.js";
const db = new EventosDatabase()
const app = express();
const PORT = 3000;


function verificaListaVazia(array) {
    return array.length == 0;
}

export const listarEventos = async (req, res, next) => {
    try {
        const eventos = db.listarTodos();
        res.json(eventos);
    } catch (err) {
        next(err);
    }
};


import express from "express";
import { Router } from 'express';
import {
    listarEventos
} from '/service.js';

const app = express();
const PORT = 3000;
const router = Router();

router.get('/', listarEventos);

app.listen(PORT, () => {
    console.log(`Servidor ligado na porta ${PORT}`);
})
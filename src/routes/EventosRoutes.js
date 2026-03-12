import express from "express";
import { EventosController } from "../controllers/EventosController.js";

const router = express.Router();

// Rotas Inicias - Listar | Listar por Id | Criar Evento
router.get('/', EventosController.listarEventos);

router.post('/', EventosController.criarEvento);

router.get('/:id', EventosController.listarEventosPorId);

// Rotas Intermediárias - Atualizar | Remover | Listar Ativos

router.put('/:id', EventosController.atualizarEvento);
router.delete('/:id', EventosController.removerEvento);
router.get('/ativos', EventosController.listarEventosAtivos);

// Última Rotas - Filtrar por Vagas | Realiza Inscrição | Cancela Evento
router.get('/filtrar', EventosController.getAllEvents);
router.patch('/:id/cancelar', EventosController.cancelarEvento);
router.post('/:id/inscricao', EventosController.inscricaoEvento);

export { router as EventosRoutes };
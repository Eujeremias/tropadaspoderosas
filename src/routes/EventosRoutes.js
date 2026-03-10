import express from "express";

// Controller
import { EventosController } from "../controllers/EventosController.js";

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

router.get('/eventos', EventosController.getAllEvents);
router.get('/eventos?vagasMin=:vagasMin', EventosController.getAllEvents);
router.patch('/eventos/:id/cancelar', EventosController.cancelarEvento);
router.post('/eventos/:id/inscricao', EventosController.inscricaoEvento);

export { router as EventosRoutes };
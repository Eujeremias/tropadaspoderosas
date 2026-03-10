import { EventosDatabase } from "../database/eventosDataBase.js";

const db = new EventosDatabase();

function verificaListaVazia(array) {
    return array.length == 0;
}

class EventosController {

    static async getAllEvents(req, res, next) {
        try {
            let eventos = db.listarTodos();
            const vagasMin = parseInt(req.query.vagasMin);
            if (!isNaN(vagasMin)) {
                eventos = eventos.filter(e => e.vagasDisponiveis >= vagasMin);
            }
            res.json(eventos);
        } catch (err) {
            next(err);
        }
    }

    static async cancelarEvento(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const evento = db.buscarPorId(id);
            if (!evento) {
                return res.status(404).json({ error: "Evento não encontrado" });
            }
            db.atualizar(id, { ativo: false });
            res.json({ message: "Evento cancelado com sucesso" });
        } catch (err) {
            next(err);
        }
    }

    static async inscricaoEvento(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const evento = db.buscarPorId(id);
            if (!evento) {
                return res.status(404).json({ error: "Evento não encontrado" });
            }
            if (!evento.ativo) {
                return res.status(400).json({ error: "Evento está cancelado" });
            }
            if (evento.vagasDisponiveis <= 0) {
                return res.status(400).json({ error: "Não há vagas disponíveis" });
            }
            db.reduzirVaga(id);
            res.json({ message: "Inscrição realizada com sucesso" });
        } catch (err) {
            next(err);
        }
    }   


}

export { EventosController };
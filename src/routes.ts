import { Router } from "express";
import { CreateClienteController } from "./Cliente/useCase/CreateClientUseCase/CreateClientController";
import { DeleteClientController } from "./Cliente/useCase/DeleteClientUseCase/DeleteClientController";
import { ReturnAllClientController } from "./Cliente/useCase/ReturnAllClientUseCase/ReturnAllClientController";
import { UpdateClientController } from "./Cliente/useCase/UpdateClientUseCase/UpdateClientController";

const router = Router();

const createClienteController = new CreateClienteController()
const returnAllClientController = new ReturnAllClientController()
const deleteClientController = new DeleteClientController()
const updateClientController = new UpdateClientController()

router.post("/client/",createClienteController.handle)
router.get("/client/",returnAllClientController.handle)
router.delete("/client/:id",deleteClientController.handle)
router.put("/client/:id",updateClientController.handle)

export { router };

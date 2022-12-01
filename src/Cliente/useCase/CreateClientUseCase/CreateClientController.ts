import { Request, Response } from 'express';
import { CreateClienteUseCase } from "./CreateClienteUseCase";

export class CreateClienteController {
    async handle(req:Request, res:Response){
        const {username,password} = req.body

        const createClienteController = new CreateClienteUseCase()

        const result = await createClienteController.execute({
            username,
            password
        })
        return res.status(200).json(result)
    }
}
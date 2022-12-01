import { Request, Response } from 'express';
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
    async handle(req: Request, res: Response){
        
        const {id} = req.params;
        const updateClientUseCase = new UpdateClientUseCase()

        const result = await updateClientUseCase.execute({id})

        return res.status(200).json(result)
    }
}
import {  DeleteClientUseCase } from "./DeleteClientUseCase";
import {Request,Response} from 'express'

export class DeleteClientController {
    async handle(req: Request, res: Response){

        const {id} = req.params;

        const deleteClientUseCase =  new DeleteClientUseCase()

        const result = await deleteClientUseCase.execute({id})
        
        return res.status(200).json({message:`User ${result}  Deleted`})
    }
}
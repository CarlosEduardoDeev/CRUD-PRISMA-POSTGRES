import {Request,Response} from 'express'
import { ReturnAllClientUseCase } from './ReturnAllClientUseCase'

export class ReturnAllClientController {
    async handle(req: Request, res: Response){
        const returnAllClientUseCase = new ReturnAllClientUseCase()
        
        const result = await returnAllClientUseCase.execute()

        return res.status(200).json(result)
    }
}
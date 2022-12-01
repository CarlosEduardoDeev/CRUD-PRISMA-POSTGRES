import { prisma } from "../../../Datebase/PrismaClient";

interface IDeleteClient{
    id: string;
}

export class DeleteClientUseCase{
    async execute({id}:IDeleteClient){

        const idExist = await prisma.client.findFirst({
            where:{
                id:{
                    mode:"insensitive"
                }
            }
        })

        if(!idExist){
            throw new Error("Cliente nao encontrado")
        }

        const result = await prisma.client.delete({
            where:{
                id
            }
        })

        return result
    }
}
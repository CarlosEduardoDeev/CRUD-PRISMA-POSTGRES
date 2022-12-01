import { prisma } from "../../../Datebase/PrismaClient";


interface IUpdateClient{
    id: string;
}

export class UpdateClientUseCase{
    async execute({id}:IUpdateClient){

        const idExist= await prisma.client.findFirst({
            where:{
                id:{
                    mode:"insensitive"
                }
            }
        })
        if(!idExist){
            throw new Error("Cliente não encontrado ")
        }
         


        const result  = await prisma.client.update({
            where:{
                id
            },
            data:{
                admin: true 
            }
    
        })

        return result
    } 
}
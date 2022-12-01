import { prisma } from "../../../Datebase/PrismaClient";


export class ReturnAllClientUseCase{
    async execute(){
        const allClients = await prisma.client.findMany()

        return allClients
    }
}
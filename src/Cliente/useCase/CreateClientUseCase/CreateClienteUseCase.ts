import { hash } from "bcrypt";
import { prisma } from "../../../Datebase/PrismaClient";

interface ICreateClient{
    username: string;
    password: string;
}
export class CreateClienteUseCase {
    async execute({username,password}:ICreateClient){
        const client = await prisma.client.findFirst({
            where:{
                username:{
                    mode:"insensitive"
                }
            }
        })
        if(client){
            throw new Error("Cliente já existe!");
        }
        const passwordHash =  await hash(password,10)
        const result = await prisma.client.create({
            data:{
                username,
                password:passwordHash,
            }
        })
        return result

    }
}
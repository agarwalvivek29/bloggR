import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const blogRouter = Router();
const prisma = new PrismaClient();

async function allblogs(){
    const res = await prisma.blog.findMany();
    return res;
}

async function blogs(author : string){
    const res = await prisma.blog.findMany({
        where : {
            author
        }
    })
    return res;
}

blogRouter.get('/', async (req,res)=>{
    const result = await allblogs();
    res.send(result);
})

blogRouter.get('/:author', async (req,res)=>{
    const result = await blogs(req.params.author)
    res.send(result);
})

export default blogRouter;
import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import authMiddleware from "../middlewares/auth";

const createRouter = Router();
const prisma = new PrismaClient();

interface Blog{
    author: string;
    title: string;
    content : string;
}

async function createBlog(blog : Blog){
    const res = await prisma.blog.create({
        data : {
            title : blog.title,
            content : blog.content,
            author : blog.author
        }
    })
    return res;
}

createRouter.post('/', authMiddleware , async (req,res)=>{
    const blog : Blog = {
        title : req.body.title,
        content : req.body.content,
        author : req.body.author
    }

    const blogcreate = await createBlog(blog);

    const result = {
        success : false,
        error : "Internal Server error",
        blogcreate
    }
    
    if(blogcreate){
        result.success = true
        result.error = ''
    }
    res.send(result);
})

export default createRouter;
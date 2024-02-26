import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';

const authRouter = Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || '';

interface user_signup{
    username : string,
    password : string,
    first_name? : string,
    last_name? : string,
    email : string
}

interface user_signin{
    username : string,
    password : string
}

async function createUser(user_data: user_signup){
    const res = await prisma.user.create({
        data: user_data
    })
    return res
}

async function loginUser(user_data: user_signin){
    const res = await prisma.user.findFirst({
        where : user_data
    })
    return res
}

function generatetoken(username : string){
    const token : any = jwt.sign({
        username
    },JWT_SECRET);
    // console.log(JWT_SECRET);
    return token
}

authRouter.post('/signup', async (req,res)=>{
    const user : user_signup = {
        username : req.body.username,
        password : req.body.password,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    }
    const dbcreate = await createUser(user)
    const token = generatetoken(req.body.username);
    
    const result = {
        success : false,
        token : null,
        user
    }

    if(dbcreate){
        result.success = true
        result.token = token
    }

    res.send(result)
});

authRouter.post('/signin', async (req,res)=>{
    const user : user_signin = {
        username : req.body.username,
        password : req.body.password
    }
    const dbcheck = await loginUser(user)
    const token = generatetoken(req.body.username);

    const result = {
        success : false,
        token : null,
        user
    }

    if(dbcheck){
        result.success = true
        result.token = token
    }
    
    res.send(result)
});

export default authRouter;
import { NextFunction, Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import prismadb from '../models/prismadb';
import { CustomRequest } from '../ts/interfaces/iexpress';

dotenv.config();

export const validJwt = async (
    // req: Request,
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {

    const token = req.header('x-token');

    if( !token ) return res.status(400).json({
        msg:'Missing Token'
    })    

    try {

        const secretOrKey = process.env.SECRETORPRIVATEKEY || '';

        const { uid } = verify( token, secretOrKey ) as JwtPayload;

        const userJWT = await prismadb.users.findFirst({
            where:{
                idUser: uid
            }
        })

        if( !userJWT ){
            return res.status(401).json({
                msg:'Token no valid or User Id not valid'
            })
        }

        req.user = userJWT;

        next();
        
    } catch (error) {

        next(error)

        res.status(401).json({msg:'No valid Token'})
    }

}
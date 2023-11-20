import { NextFunction, Request, Response } from "express";
import prismadb from "../../models/prismadb";

export const getUser = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {

    const { idUser } = req.params;

    try {

        const getUser = prismadb.users.findUnique({
            where:{
                idUser: idUser
            },
            include:{
                role:true
            }
        })

        return res.status(200).json(getUser);

    } catch(error){
        return console.log(
          res.status(401).json( next(error) )
        );
    }

}

export const getAllUser = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {
    try {

        const allUsers = await prismadb.users.findMany({
            where:{
                isActive: true
            }
        })

        return res.status(200).json(allUsers)
        
    } catch (error) {
      return console.log(
        res.status(401).json( next(error) )
      );
    }
 }
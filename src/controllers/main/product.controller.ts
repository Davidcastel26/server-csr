import { NextFunction, Request, Response } from 'express';
import prismadb from '../../models/prismadb';
import { Product, partialProduct } from '../../ts';

export const createProduct = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {

    const { nameProduct, numProduct, desc, imgMainProduct }:Product = req.body;

    try {

        const postProduct: partialProduct = {
            nameProduct,
            numProduct,
            desc,
            imgMainProduct
        }

        await prismadb.products.create({
            data:{
                nameProduct: postProduct.nameProduct!,
                numProduct: postProduct.numProduct,
                desc: postProduct.desc!,
                imgMainProduct: postProduct.imgMainProduct
            }
        })

        return res.status(201).json( postProduct );

    } catch (error) {
      return console.log(
        res.status(401).json( next(error) )
      );
    }

}

export const updateProduct = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {
    try {
        
    } catch (error) {
      return console.log(
        res.status(401).json( next(error) )
      );
    }

}

export const deleteProduct = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {
    try {
        
    } catch (error) {
      return console.log(
        res.status(401).json( next(error) )
      );
    }

}

export const hideProduct = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {
    try {
        
    } catch (error) {
      return console.log(
        res.status(401).json( next(error) )
      );
    }

}


export const getProduct = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {

    const { idProduct } = req.params;

    try {

        const getProduct = await prismadb.products.findUnique({
            where: { idProduct },
            include: {
                imgs: true,
                productDetail: true
            }
        })
        
        return res.status(200).json(getProduct)

    } catch (error) {
      return console.log(
        res.status(401).json( next(error) )
      );
    }

}

export const getAllProducts = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {
    
    try {
        
        const allProducts = await prismadb.products.findMany({
          include:{
            productDetail: true
          }
        })

        return res.status(200).json(allProducts)
        
    } catch (error) {
      return console.log(
        res.status(401).json( next(error) )
      );
    }

}
/*export const updateProduct = async( 
    req: Request, 
    res: Response, 
    next:NextFunction 
) => {
    try {
        
    } catch (error) {
      return console.log(
        res.status(401).json( next(error) )
      );
    }

} */
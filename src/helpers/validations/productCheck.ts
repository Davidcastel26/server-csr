import prismadb from "../../models/prismadb"


export const productIdExist = async( idProduct: string ) => {

    const idProductEx = await prismadb.products.findUnique({
        where:{ idProduct }
    }) 

    if( !idProductEx ) throw new Error(`product id ${idProduct} not valid`)

}

export const productName =async ( nameProduct: string) => {
    
    const namePdt = await prismadb.products.findFirst({
        where:{ nameProduct }
    })

    if( namePdt ) throw new Error(`Product ${namePdt.nameProduct} already exist / unable to create OR update`)
}

export const activeProductTrue =async (isActive:boolean) => {
    
    const product = await prismadb.products.findFirst({
        where:{
            isActive: true
        }
    })

    if( product?.isActive === false ) throw new Error(`Product ${product.nameProduct}  not at inventory`)

}
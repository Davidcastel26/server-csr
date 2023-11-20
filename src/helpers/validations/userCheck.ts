import prismadb from "../../models/prismadb"


export const userIdExist = async (idUser :string) => {
    
    const idExist = await prismadb.users.findUnique({
        where: { idUser }
    })

    if(!idUser) throw new Error(`user id ${idUser} not valid`)

}
import prismadb from "../../models/prismadb"


export const userIdExist = async (idUser :string) => {
    
    const idExist = await prismadb.users.findUnique({
        where: { idUser }
    })

    if(!idExist) throw new Error(`user id ${idUser} not valid`)

}
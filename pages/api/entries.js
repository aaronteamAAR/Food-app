import {PrismaClient} from '@prisma/client'; 
  
const prisma = new PrismaClient()

export default async (req, res) => {
    const data = JSON.parse(req.body)
    const createdEntry = await prisma.foodlog.create({
        data
    })

    res.json(createdEntry)
}
 
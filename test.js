import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    //Create
    // const post = await prisma.post.create({
    //     data: {
    //         title: 'Titulo 1',
    //         content: 'Contenmido'
    //     }
    // })
    // console.log(post)

    const posts = await prisma.zona.findMany()
    console.log(posts)
}

main().catch( (e) => {
    throw e
})
.finally(async () => {
    await prisma.$disconnect()
})
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export async function GET(params) {
    const res = await prisma.releases.findMany();
    return Response.json({res});

}
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export async function GET() {
    const res = await prisma.tracks.findMany();
    return Response.json({res});

}
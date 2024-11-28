import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export async function GET() {
    const res = await prisma.release_groups.findMany({
        relationLoadStrategy: 'query',
        include: {
            groupings: true,
        }
    });
    return Response.json({res});

}
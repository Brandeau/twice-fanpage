import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export async function GET(req, {params}) {
    const res = await prisma.releases_tracks.findMany({
        relationLoadStrategy: 'join',
        include: {
            releases: true,
            tracks: true
          },
    });
    return Response.json(res, { status: 200 });

}
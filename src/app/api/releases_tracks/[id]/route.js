import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export async function GET(req, {params}) {
    const res = await prisma.releases_tracks.findMany({
        relationLoadStrategy: 'join',
        include: {
            tracks: true,
        },
        where:{
            releases:{
                release_group_id: Number((await params).id)
            }
        }
    });

    return Response.json(res, { status: 200 });

}
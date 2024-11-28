import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export async function GET(req, {params}) {
    console.log(params);
   try {
    const res = await prisma.release_groups.findFirst({
        relationLoadStrategy: 'query',
        include: {
            groupings: true,
            release_groups_types: true,
            releases: {
                include: {
                    countries: true,
                    release_formats: true,
                    releases_tracks: {
                        include: {
                            tracks: true
                        }
                    }
                }
            }
        },
        where:{
            id: Number((await params).id)
        }
    });

    return Response.json(res, { status: 200 });
   } catch(e) {
    console.error(e);
    return Response.json({ error: e }, { status: 500 })
   }

}
import { PrismaClient } from '@prisma/client';
import util from "node:util";
 
const prisma = new PrismaClient();
 
export async function GET(req, {params}) {
    const res = await prisma.releases.findMany({
        where: {
            release_group_id: Number((await params).id),
        },
        relationLoadStrategy: 'join',
        include: {
            countries: true,
            release_formats: true
          },
    });

    return Response.json(res, { status: 200 });

}
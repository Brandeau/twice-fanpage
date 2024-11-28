import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
/**
 * Fetches all members.
 *
 * @returns {Response} - A JSON response containing an array of all members.
 */
export async function GET() {
    const res = await prisma.members.findMany();
    return Response.json({res});

}
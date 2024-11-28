import { PrismaClient } from '@prisma/client';
import util from "node:util";
 
const prisma = new PrismaClient();

/**
 * 
 *  * Fetches a specific member by ID.
 * @param {Request} req - The incoming HTTP request.
 * @param {{ params: { id: string } }} - An object containing the route parameters.
 * @returns {Response} - A JSON response containing the retrieved member data or an error message.
 */
export async function GET(req, {params}) {
    const res = await prisma.members.findUnique({
        where: {
            id: Number((await params).id),
        },
    });

    return Response.json(res, { status: 200 });

}
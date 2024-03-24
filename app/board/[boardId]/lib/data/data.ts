import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTaskBoardById(id: number) {
    try {
        const board = await prisma.taskBoard.findUnique({
            where: {
                id
            },
            include: {
                tasks: true
            }
        });

        return board;
    } catch (error) {
        return null;
    }
}
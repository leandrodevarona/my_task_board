"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function updateAction(boardId: number, formData: FormData) {
    const name = formData.get('name')?.toString() || null;
    const description = formData.get('description')?.toString() || null;

    if (!name) return null;

    try {
        await prisma.taskBoard.update({
            data: {
                name,
                description
            },
            where: {
                id: boardId
            }
        })
    } catch (error) {
        return null;
    }

    revalidatePath(`/board/${boardId}`);
}
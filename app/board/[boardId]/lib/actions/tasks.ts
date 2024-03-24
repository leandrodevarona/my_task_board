"use server";

import { PrismaClient, TaskIcon, TaskStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createAction(boardId: number, formData: FormData) {
    const name = formData.get('name')?.toString() || null;
    const description = formData.get("description")?.toString() || null;
    const icon = formData.get("icon")?.toString() as TaskIcon || undefined;
    const status = formData.get("status")?.toString() as TaskStatus || undefined;

    if (!name) return null;

    try {
        await prisma.task.create({
            data: {
                name,
                description,
                icon,
                status,
                taskBoardId: boardId
            }
        });
    } catch (error) {
        return null;
    }

    revalidatePath(`/board/${boardId}`)
}

export async function updateAction(boardId: number, taskId: number, formData: FormData) {
    const name = formData.get('name')?.toString() || null;
    const description = formData.get("description")?.toString() || null;
    const icon = formData.get("icon")?.toString() as TaskIcon || undefined;
    const status = formData.get("status")?.toString() as TaskStatus || undefined;

    if (!name) return null;

    try {
        await prisma.task.update({
            data: {
                name,
                description,
                icon,
                status
            },
            where: {
                id: taskId
            }
        });
    } catch (error) {
        return null;
    }

    revalidatePath(`/board/${boardId}`)
    redirect(`/board/${boardId}`)
}

export async function deleteAction(boardId: number, taskId: number) {
    try {
        await prisma.task.delete({
            where: {
                id: taskId
            }
        })
    } catch (error) {
        return null;
    }

    revalidatePath(`/board/${boardId}`)
    redirect(`/board/${boardId}`)
}
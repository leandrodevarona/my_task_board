import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function Home() {
  const createdBoard = await prisma.taskBoard.create({});

  redirect(`board/${createdBoard.id}`);
}

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'COMPLETED', 'WONT_DO');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Task in Progress',
    "description" TEXT,
    "icon" TEXT,
    "status" "TaskStatus" NOT NULL DEFAULT 'TODO',
    "taskBoardId" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskBoard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'My Task Board',
    "description" TEXT,

    CONSTRAINT "TaskBoard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskBoardId_fkey" FOREIGN KEY ("taskBoardId") REFERENCES "TaskBoard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

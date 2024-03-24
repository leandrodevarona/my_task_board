-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskBoardId_fkey";

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "taskBoardId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskBoardId_fkey" FOREIGN KEY ("taskBoardId") REFERENCES "TaskBoard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

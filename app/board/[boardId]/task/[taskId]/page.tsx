import TaskDetails from "@mtb/app/board/[boardId]/components/TaskDetails";

type Props = {
  params: {
    boardId: string;
    taskId: string;
  };
};

export default function TaskPage({ params: { boardId, taskId } }: Props) {
  return <TaskDetails boardId={Number(boardId)} taskId={Number(taskId)} />;
}

import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import TaskList from "./components/TaskList";
import { getTaskBoardById } from "./lib/data/data";
import styles from "./page.module.css";

type Props = {
  params: {
    boardId: string;
  };
};

export default async function TaskBoardPage({ params: { boardId } }: Props) {
  const board = await getTaskBoardById(Number(boardId));
  if (!board) return null;

  return (
    <main className={styles.main}>
      <div className={styles.main_board}>
        <Header
          boardId={board.id}
          boardName={board.name}
          boardDescription={board.description}
        />
        <TaskList tasks={board.tasks} />
      </div>
      <TaskDetails boardId={board.id} />
    </main>
  );
}

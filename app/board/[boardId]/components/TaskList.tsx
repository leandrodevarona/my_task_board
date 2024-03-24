import { Task } from "@prisma/client";
import TaskItem from "./TaskItem";
import Submit from "./common/Submit";
import AddRoundDuotone from "./assets/icons/AddRoundDuotone";
import { createAction } from "../lib/actions/tasks";

import "./styles/taskList.css";

type Props = {
  boardId: number;
  tasks: Task[];
};

export default function TaskList({ boardId, tasks }: Props) {
  const createTask = createAction.bind(null, boardId);

  return (
    <div className="task_list">
      <ul className="task_list__content">
        {tasks &&
          !!tasks.length &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </ul>
      <form action={createTask}>
        <Submit className="task_list__add">
          <div className="task_list__addicon">
            <AddRoundDuotone />
          </div>
          <span>Add new task</span>
        </Submit>
      </form>
    </div>
  );
}

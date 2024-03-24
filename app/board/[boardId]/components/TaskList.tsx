import { Task } from "@prisma/client";
import OpenDetails from "./OpenDetails";
import TaskItem from "./TaskItem";

import "./styles/taskList.css";

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  return (
    <div className="task_list">
      <ul className="task_list__content">
        {tasks &&
          !!tasks.length &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </ul>
      <OpenDetails />
    </div>
  );
}

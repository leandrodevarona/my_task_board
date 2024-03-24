import { Task } from "@prisma/client";
import { Icons } from "../lib/utils/icons";
import Link from "next/link";
import { Status } from "../lib/utils/status";

import "./styles/taskItem.css";

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  return (
    <li className={`task_item ${task.status}`}>
      <Link href={`/board/${task.taskBoardId}/task/${task.id}`}>
        <div className="task_item__icon">{task.icon && Icons[task.icon]}</div>
        <div className="task_item__content">
          <span className="task_item__title">{task.name}</span>
          <p className="task_item__description">{task.description}</p>
        </div>
        {task.status && task.status !== "TODO" && (
          <div className={`task_status__icon ${task.status}`}>
            {Status[task.status].icon}
          </div>
        )}
      </Link>
    </li>
  );
}

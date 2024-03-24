import { PrismaClient } from "@prisma/client";
import { createAction, deleteAction, updateAction } from "../lib/actions/tasks";
import Submit from "./common/Submit";
import IconSelector from "./IconSelector";
import StatusSelector from "./StatusSelector";
import DetailsOpener from "./DetailsOpener";
import CloseDetails from "./CloseDetails";
import Trash from "./assets/icons/Trash";
import DoneRound from "./assets/icons/DoneRound";

import "./styles/taskDetails.css";

const prisma = new PrismaClient();

type Props = {
  boardId: number;
  taskId?: number;
};

export default async function TaskDetails({ boardId, taskId }: Props) {
  const action = !!taskId
    ? updateAction.bind(null, boardId, taskId)
    : createAction.bind(null, boardId);

  const deleteTask = async () => {
    "use server";

    if (taskId) await deleteAction(boardId, taskId);
  };

  const task = !!taskId
    ? await prisma.task.findUnique({
        where: {
          id: taskId,
        },
      })
    : null;

  return (
    <dialog
      id={!!taskId ? "update_task" : "task_details"}
      className="task_details"
    >
      {!!taskId && <DetailsOpener open />}
      <div className="task_details__content">
        <header>
          <h5>Task details</h5>
          <form method="dialog">
            <CloseDetails withBack={!!taskId} />
          </form>
        </header>
        <form className="task_details__form" action={action}>
          <label className="details_form__label">
            Task name
            <input type="text" name="name" defaultValue={task?.name} required />
          </label>
          <label className="details_form__label">
            Description
            <textarea
              name="description"
              placeholder="Enter a short description"
              defaultValue={task?.description || ""}
            />
          </label>
          <div>
            <span className="details_form__label">Icon</span>
            <IconSelector defaultChecked={task?.icon} />
          </div>
          <div>
            <span className="details_form__label">Status</span>
            <StatusSelector defaultChecked={task?.status} />
          </div>
          <div className="task_details__actions">
            {!!taskId && (
              <Submit className="task_delete__btn" formAction={deleteTask}>
                <span>Delete</span>
                <Trash />
              </Submit>
            )}
            <Submit className="task_save__btn">
              <span>Save</span>
              <DoneRound />
            </Submit>
          </div>
        </form>
      </div>
    </dialog>
  );
}

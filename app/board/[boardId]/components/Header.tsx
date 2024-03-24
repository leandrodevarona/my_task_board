import BoardLogo from "./assets/icons/BoardLogo";
import EditDuotone from "./assets/icons/EditDuotone";
import { updateAction } from "../lib/actions/board";

import "./styles/header.css";

type Props = {
  boardId: number;
  boardName: string;
  boardDescription?: string | null;
};

export default function Header({
  boardId,
  boardName,
  boardDescription,
}: Props) {
  const updateBoard = updateAction.bind(null, boardId);

  return (
    <header className="board_header">
      <BoardLogo />
      <form className="board_header__form" action={updateBoard}>
        <label className="board_form__name">
          <input type="text" name="name" defaultValue={boardName} />
          <EditDuotone className="board_form__icon" />
          <button className="board_form__btn" type="submit">
            ✅
          </button>
        </label>
        <input
          className="board_form__description"
          type="text"
          name="description"
          defaultValue={boardDescription || ""}
        />
      </form>
    </header>
  );
}

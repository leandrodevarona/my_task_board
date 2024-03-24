"use client";

import AddRoundDuotone from "./assets/icons/AddRoundDuotone";

import "./styles/openDetails.css";

export default function OpenDetails() {
  const handleOnCLick = () => {
    const dialog = document.getElementById("task_details") as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  };

  return (
    <button className="open_details" onClick={handleOnCLick}>
      <div className="open_details__icon">
        <AddRoundDuotone />
      </div>
      <span>Add new task</span>
    </button>
  );
}

"use client";

import { useRouter } from "next/navigation";
import CloseRingDuotone from "./assets/icons/CloseRingDuotone";

import "./styles/closeDetails.css";

export default function CloseDetails() {
  const { back } = useRouter();

  const handleOnClick = () => {
    back();
  };

  return (
    <button
      className="close_details"
      type="submit"
      aria-label="Close task form"
      onClick={handleOnClick}
    >
      <CloseRingDuotone />
    </button>
  );
}

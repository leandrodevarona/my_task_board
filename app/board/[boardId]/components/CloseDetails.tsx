"use client";

import { useRouter } from "next/navigation";
import CloseRingDuotone from "./assets/icons/CloseRingDuotone";

import "./styles/closeDetails.css";

type Props = {
  withBack: boolean;
};

export default function CloseDetails({ withBack }: Props) {
  const { back } = useRouter();

  const handleOnClick = () => {
    if (withBack) back();
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

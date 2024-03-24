"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
};

export default function DetailsOpener({ open }: Props) {
  useEffect(() => {
    const dialog = document.getElementById("update_task") as HTMLDialogElement;
    if (dialog) {
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [open]);

  return null;
}

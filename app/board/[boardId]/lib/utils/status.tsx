import { TaskStatus } from "@prisma/client";
import TimeAtackDuotone from "../../components/assets/icons/TimeAtackDuotone";
import DoneRoundDuotone from "../../components/assets/icons/DoneRoundDuotone";
import CloseRingDuotoneRed from "../../components/assets/icons/CloseRingDuotoneRed";

type NewTaskStatus = Exclude<TaskStatus, "TODO">;

type StatusContent = {
  text: string;
  icon: React.ReactNode;
};

export const Status: Record<NewTaskStatus, StatusContent> = {
  IN_PROGRESS: {
    text: "In Progress",
    icon: <TimeAtackDuotone />,
  },
  COMPLETED: {
    text: "Completed",
    icon: <DoneRoundDuotone />,
  },
  WONT_DO: {
    text: "Won’t do",
    icon: <CloseRingDuotoneRed />,
  },
};

"use client";

import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

import "./styles/submit.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  formAction?: (formData: FormData | any) => Promise<void | null>;
};

export default function Submit({ children, className, formAction }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`submit ${className || ""}`}
      type="submit"
      formAction={formAction}
    >
      {children}
      {pending && <Spinner />}
    </button>
  );
}

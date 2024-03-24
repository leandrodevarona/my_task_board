import { Fragment } from "react";

export default function BoardLayout({
  children,
  task,
}: Readonly<{
  children: React.ReactNode;
  task: React.ReactNode;
}>) {
  return (
    <Fragment>
      {children}
      {task}
    </Fragment>
  );
}

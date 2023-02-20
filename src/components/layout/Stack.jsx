import { clsx } from "clsx";

const Stack = ({ direction, className, children }) => {
  const containerClasses = clsx(
    "flex",
    direction === "col" && "flex-col",
    className
  );

  return <div className={containerClasses}>{children}</div>;
};
export default Stack;

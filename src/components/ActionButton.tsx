import type { SectionId } from "@/types/type";
import { type FC, type ReactNode } from "react";
import { Link } from "react-scroll";

type ActionButtonProps = {
  children: ReactNode;
  to?: SectionId;
  variant: "link" | "button";
};

export const ActionButton: FC<ActionButtonProps> = ({
  children,
  to,
  variant,
}) => {
  return variant === "link" && to ? (
    <Link
      className="rounded-md bg-secondary-500 px-10 py-2 cursor-pointer hover:bg-primary-500 animate hover:text-white"
      to={to}
    >
      {children}
    </Link>
  ) : (
    <button className="rounded-md bg-secondary-500 px-10 py-2 cursor-pointer hover:bg-primary animate hover:text-white">
      {children}
    </button>
  );
};

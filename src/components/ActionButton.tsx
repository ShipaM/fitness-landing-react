import type { SectionId } from "@/types/type";
import { memo, type FC, type ReactNode } from "react";
import { Link } from "react-scroll";

type ActionButtonProps = {
  children: ReactNode;
  to?: SectionId;
  variant: "link" | "button";
  className?: string;
};

export const ActionButton: FC<ActionButtonProps> = memo(
  ({ children, to, variant, className }) => {
    const baseStyle =
      "rounded-md px-6 py-2 sm:px-10 text-sm sm:text-base whitespace-nowrap cursor-pointer animate";
    const linkStyle =
      className ||
      `${baseStyle} hover:bg-primary-500 hover:text-white bg-secondary-500`;
    const buttonStyle =
      className ||
      `${baseStyle} bg-secondary-500 hover:text-white hover:bg-primary-500`;

    return variant === "link" && to ? (
      <Link className={linkStyle} to={to}>
        {children}
      </Link>
    ) : (
      <button className={buttonStyle}>{children}</button>
    );
  }
);

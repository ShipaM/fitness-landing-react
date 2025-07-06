import type { SectionId } from "@/types/type";
import type { FC, ReactNode } from "react";
import { Link } from "react-scroll";

type CustomLinkProps = {
  children: ReactNode;
  section: SectionId;
  onClick: (sectionId: SectionId) => void;
  activeSection: SectionId | null;
};

export const CustomLink: FC<CustomLinkProps> = ({
  section,
  onClick,
  activeSection,
  children,
}) => {
  const isActive = activeSection === section;
  return (
    <Link
      to={section}
      onClick={() => onClick(section)}
      className={`animate hover:text-primary-300 cursor-pointer capitalize ${
        isActive ? "text-primary-500" : ""
      }`}
    >
      {children}
    </Link>
  );
};

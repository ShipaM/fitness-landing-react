import Logo from "@/assets/logo.png";
import { ActionButton } from "../ActionButton";
import { useState } from "react";
import { navLinks, type SectionId } from "@/types/type";
import { CustomLink } from "./CustomLink";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(
    navLinks[0]?.id || null
  );

  const handleSetActive = (section: SectionId) => {
    setActiveSection(section);
  };

  return (
    <nav className="relative h-[88px]">
      <div className="fixed top-0 z-30 w-full">
        <div className="mx-auto w-5/6 flex-between">
          <div className="flex-between gap-20 w-full">
            <img src={Logo} alt="logo" />
            <div className="flex-between w-full">
              <div className="flex-between gap-8 text-sm">
                {navLinks.map((link) => (
                  <CustomLink
                    key={link.id}
                    section={link.id}
                    onClick={handleSetActive}
                    activeSection={activeSection}
                  >
                    {link.label}
                  </CustomLink>
                ))}
              </div>
              <div className="flex-between gap-8">
                <button className="rounded-md bg-primary-500 px-10 py-2 cursor-pointer hover:bg-secondary-500 animate hover:text-white">
                  Sign in
                </button>
                <ActionButton variant="link" to="contactus">
                  Become a member
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

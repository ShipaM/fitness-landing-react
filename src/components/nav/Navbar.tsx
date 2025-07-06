import Logo from "@/assets/logo.png";
import { ActionButton } from "../ActionButton";
import { useEffect, useState } from "react";
import { navLinks, type SectionId } from "@/types/type";
import { CustomLink } from "./CustomLink";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(
    navLinks[0]?.id || null
  );
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const isAboveMediaScrin = useMediaQuery("(min-width: 1200px)");

  const navbarBg = isTopPage ? "" : "bg-primary-100 drop-shadow";

  const handleSetActive = (section: SectionId) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTopPage(window.scrollY === 0);

      navLinks.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (
            window.scrollY >= offsetTop - 100 &&
            window.scrollY < offsetBottom - 100
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="relative h-[88px]">
      <div
        className={`${navbarBg} ${
          isTopPage ? "py-6" : "py-4"
        } animate fixed top-0 z-30 w-full py-6`}
      >
        <div className="mx-auto w-5/6 flex-between">
          <div className="flex-between gap-20 w-full">
            <img src={Logo} alt="logo" />
            {isAboveMediaScrin ? (
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
            ) : (
              <>
                <button
                  onClick={() => setIsMenuToggled((prev) => !prev)}
                  className="rounded-full bg-secondary-500 p-2 animate cursor-pointer"
                >
                  <Bars3Icon className="h-6 w-6 text-white animate" />
                </button>
                {!isAboveMediaScrin && isMenuToggled && (
                  <div className="fixed top-0 h-screen right-0 w-[300px] animation bg-primary-100 drop-shadow-xl">
                    <div className="flex justify-end p-6">
                      <button
                        onClick={() => setIsMenuToggled(false)}
                        className="cursor-pointer"
                      >
                        <XMarkIcon className="h-7 w-7 text-gray-600 animate" />
                      </button>
                    </div>
                    <div className="ml-[20%] flex flex-col gap-10 text-xl">
                      {navLinks.map(({ id, label }) => (
                        <CustomLink
                          key={id}
                          section={id}
                          onClick={(sectionId) => {
                            setIsMenuToggled(false);
                            setActiveSection(sectionId);
                          }}
                          activeSection={activeSection}
                        >
                          {label}
                        </CustomLink>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="cursor-pointer fixed bottom-8 right-8 z-50 bg-primary-500 hover:bg-primary-600 text-white font-bold shadow-md hover:bg-primary-700 p-3 rounded-full animate"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    )
  );
};

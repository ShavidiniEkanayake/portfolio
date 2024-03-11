import React, { useState, useRef, Fragment } from "react";
import { Logo } from "../icons";
import { X } from "lucide-react";

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navBarRef = useRef(null);

  useEffect(() => {
    if (isDarkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (navBarRef.current) {
      setMenuWidth(navBarRef.current.clientWidth);
    }
  }, [isMenuOpen]);

  // const handleThemeChange = () => {
  //   setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  // };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const nav = [
    {
      path: "#",
      label: "About me",
    },
    {
      path: "#",
      label: "Experience",
    },
    {
      path: "#",
      label: "Projects",
    },
    {
      path: "#",
      label: "Skills",
    },
    {
      path: "#",
      label: "Certificates",
    },
  ];

  return (
    <>
      <header className="bg-white/90 backdrop-blur dark:bg-darkmode border-b border-black/5 sticky top-0 z-50">
        <div ref={navBarRef} className="container">
          <div className="flex justify-between items-center min-h-20">
            <div className="flex items-center gap-10">
              <Logo className="w-16 lg:w-20 h-9 lg:h-12" />
              <div className="hidden lg:flex items-center gap-6">
                {nav.map((item, index) => (
                  <Fragment key={index}>
                    <a
                      href={item.path}
                      className="hover:text-orange dark:text-white font-Satoshi font-semibold text-lg"
                    >
                      {item.label}
                    </a>
                    <span className="inline-block w-[.375rem] h-[.375rem] bg-black rounded-full last:hidden" />
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 lg:hidden">
              <button onClick={handleMenuToggle}>
                <svg
                  className="h-6 w-6 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <button className="bg-orange rounded-full text-white font-Satoshi font-bold px-3 py-1 hidden lg:block">
              Say Hello!
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-white transition-all duration-700 z-[60] ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center m-6 font-Satoshi uppercase text-3xl gap-6">
          {nav.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="hover:text-orange dark:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <span className="fixed flex justify-center bottom-10 left-0 right-0">
          <X
            role="banner"
            onClick={handleMenuToggle}
            className="text-black/40 w-6 h-6"
          />
        </span>
      </div>
    </>
  );
};

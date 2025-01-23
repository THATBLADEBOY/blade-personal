import { Link, useLocation } from "@remix-run/react";
import clsx from "clsx";

import { LayoutGroup, motion } from "framer-motion";
import logo from "public/svgs/logo.svg";
import { useEffect, useState } from "react";

const navItems = {
  // "/": {
  //   name: "home",
  // },
  // "/blog": {
  //   name: "blog",
  // },
};

function Logo() {
  return (
    <Link aria-label="Austin Blade" to="/">
      <img alt="Austin Blade" height={48} src={logo} width={48} />
    </Link>
  );
}

export const NavigationBar = () => {
  // get the current pathname with react router
  const { pathname } = useLocation();

  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className={`fixed w-full z-30 `}>
      <aside
        className={`mx-auto max-w-7xl md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top ? "bg-black backdrop-blur-sm shadow-lg" : ""
        }`}
      >
        <div className="flex justify-between items-center px-8 py-4">
          <div className=" px-4 md:px-0 space-y-10 flex flex-col md:flex-row items-start ">
            <Logo />
          </div>
          <LayoutGroup>
            <nav
              className="flex flex-row items-start relative px-4 md:px-0 pb-0 fade md:relative"
              id="nav"
            >
              <div className="flex flex-row space-x-2 w-full">
                {/* @ts-expect-error: can remove this comment when navItems present */}
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      to={path}
                      className={clsx(
                        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                        {
                          "text-white/90": !isActive,
                          "font-bold": isActive,
                        }
                      )}
                    >
                      <span className="relative py-[5px] px-[10px] uppercase ">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 z-[-1]"
                            layoutId="sidebar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </LayoutGroup>
        </div>
      </aside>
    </div>
  );
};

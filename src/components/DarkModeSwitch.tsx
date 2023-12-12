import { MoonStars, SunDim } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type TDarkModeSwitchProps = {
  isDarkTheme: boolean,
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
}

function DarkModeSwitch({isDarkTheme, setIsDarkTheme}: TDarkModeSwitchProps) {

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  function toggleDarkModeHandle() {
    if (isDarkTheme) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <button
      className="rounded-full cursor-pointer"
      onClick={toggleDarkModeHandle}
    >
      {isDarkTheme ? (
        <motion.div
          initial={{ rotate: -50, scale: 0.7 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: 50, scale: 0.7 }}
        >
          <MoonStars className=" text-neutral-200" size={22} />
        </motion.div>
      ) : (
        <AnimatePresence>
                  <motion.div
          initial={{ rotate: -50, scale: 0.7 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: 50, scale: 0.7 }}
        >
          <SunDim className=" text-neutral-500" size={22} />
        </motion.div>
        </AnimatePresence>
      )}
    </button>
  );
}

export default DarkModeSwitch;

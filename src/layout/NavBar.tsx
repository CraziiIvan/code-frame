import { useState } from "react";
import logo from "../assets/code_frame_logo.svg";
import logoWhite from "../assets/code_frame_logo_white.svg";
import Button from "../components/Button";
import DarkModeSwitch from "../components/DarkModeSwitch";

function NavBar() {

  const [ isDarkTheme, setIsDarkTheme ] = useState(localStorage.theme === "dark" ? true : false)

  return (
    <nav className="w-full py-3 px-6 bg-white  border-b border-b-neutral-200 dark:border-b-neutral-800 flex justify-between items-center dark:bg-neutral-950">
      <div className="flex items-center gap-x-2">
        <div className="h-5 flex items-center">
          {
            isDarkTheme ? (<img src={logoWhite} className="h-full" /> ) : (<img src={logo} className="h-full" />)
          }

        </div>
        <h1 className="pb-0.5 text-xl font-bold subpixel-antialiased dark:text-neutral-50 dark:font-semibold">
          Code Frame
        </h1>
      </div>
      <div className=" flex items-center gap-x-5">
        <DarkModeSwitch isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Button />
      </div>
    </nav>
  );
}

export default NavBar;

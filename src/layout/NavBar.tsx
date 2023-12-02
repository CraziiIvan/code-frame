import logo from "../assets/logo.svg";
import Button from "../components/Button";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <nav className="w-full py-3 px-6 bg-white border-b border-b-neutral-200 flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <div className="h-5 flex items-center">
          <img
            src={logo}
            className="h-full"
          />
        </div>
        <h1 className="pb-0.5 text-xl font-extrabold subpixel-antialiased">
          Code Frame
        </h1>
      </div>
      <Button />
    </nav>
  );
}

export default NavBar;

import logo from "../assets/logo.svg";
import Button from "../components/Button";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <nav className="w-full py-3 px-6 bg-white border-b border-b-neutral-200 flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <div className="h-7 w-7">
          <motion.img
            transition={{ type: "spring", stiffness: 45, damping: 8}}
            initial={{ scale: 0.4, rotate: 120 }}
            animate={{ scale: 1, rotate: 0 }}
            src={logo}
            className=" h-7"
          />
        </div>
        <h1 className="pb-0.5 text-2xl font-extrabold subpixel-antialiased">
          Snaply
        </h1>
      </div>
      <Button />
    </nav>
  );
}

export default NavBar;

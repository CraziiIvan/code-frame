import { FilePng, FileSvg } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { exportImg } from "../utils/export";
import { useOptionsContext } from "../hooks/useOptionsContext";
import { cn } from "../utils/utils";

function Button() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const context = useOptionsContext();
  const canvasRef = context.canvasRef;
  const { title } = context.state;

  useOutsideClick({ dispatch: setVisible, refs: [buttonRef, dropDownRef] });

  function exportHandle(format: string) {
    exportImg(canvasRef.current as HTMLElement, title, format)
  }

  return (
    <div className=" relative">
      <button
        ref={buttonRef}
        className={cn(
          "button pt-1.5 pb-2 px-5 bg-neutral-800 dark:bg-neutral-100 rounded-xl text-neutral-100 dark:text-neutral-900 font-medium flex items-center ring-offset-1 dark:ring-offset-2 dark:ring-offset-neutral-950 hover:ring-1 ring-neutral-300 dark:ring-neutral-700 transition-all ease-out duration-200",
          { "ring-1 ring-neutral-300 dark:ring-neutral-700": visible }
        )}
        onClick={() => setVisible(!visible)}
      >
        Export
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            ref={dropDownRef}
            transition={{ ease: "easeOut", duration: 0.2 }}
            initial={{ translateY: 2, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 2, opacity: 0 }}
            className=" absolute top-11 -right-2 z-50 p-2 bg-white dark:bg-neutral-900 rounded-lg drop-shadow-sm border border-neutral-200 dark:border-neutral-800"
          >
            <ul>
              <li
                onClick={() => exportHandle("png")}
                className=" w-36 px-3 py-2 flex justify-between text-sm cursor-pointer rounded-md text-neutral-800 dark:text-neutral-300 font-medium hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-all ease-out"
              >
                <FilePng size={20} /> Export as PNG
              </li>
              <li
                onClick={() => exportHandle("svg")}
                className=" w-36 px-3 py-2 flex justify-between text-sm cursor-pointer rounded-md text-neutral-800 dark:text-neutral-300 font-medium hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-all ease-out"
              >
                <FileSvg size={20} /> Export as SVG
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Button;

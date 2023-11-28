import { FilePng, FileSvg } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function Button() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropDownRef = useRef<HTMLDivElement>(null)

    function outsideClickHandle(e: MouseEvent) {
        if(e.target !== dropDownRef.current && e.target !== buttonRef.current) {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("click", outsideClickHandle)
    },[])

  return (
    <div className=" relative">
      <button
      ref={buttonRef}
        className={`pt-1.5 pb-2 px-5 bg-neutral-800 rounded-xl text-neutral-100 font-medium flex items-center ring-offset-1 ${
          visible && "ring-1 ring-neutral-200"
        } hover:ring-1 hover:ring-neutral-200 hover:text-white transition-all ease-out duration-200`}
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
            className=" absolute top-11 -right-2 z-50 p-2 bg-white rounded-lg drop-shadow-sm border border-neutral-200"
          >
            <ul>
              <li className=" w-36 px-3 py-2 flex justify-between text-sm cursor-pointer rounded-md text-neutral-800 font-medium hover:bg-neutral-100 transition-all ease-out">
                <FilePng size={20} /> Export as PNG
              </li>
              <li className=" w-36 px-3 py-2 flex justify-between text-sm cursor-pointer rounded-md text-neutral-800 font-medium hover:bg-neutral-100 transition-all ease-out">
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

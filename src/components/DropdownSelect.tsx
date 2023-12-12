import { CaretUpDown, Check } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { TDropdownSelectProps } from "../types/types";
import {capitalizeAndAddSpace, cn} from "../utils/utils";
import { useOptionsContext } from "../hooks/useOptionsContext";

function DropdownSelect({
  options,
  state,
  id,
}: TDropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);
  const dropDownRef = useRef(null);
  const dispatch = useOptionsContext().dispatch

  function toggleDropdown() {
    setOpen(!open);
  }

  function selectHandle(value: string, id: string) {
    dispatch({ type: id, payload: value });
    setOpen(false);
  }

  useOutsideClick({ dispatch: setOpen, refs: [selectorRef, dropDownRef] });

  return (
    <div className=" relative">
      <label className=" text-neutral-400 dark:text-neutral-500 text-xs">
        {capitalizeAndAddSpace(id)}
      </label>
      <motion.button
        ref={selectorRef}
        onClick={toggleDropdown}
        className="dark:text-neutral-100 mt-1 py-1 px-2 w-36 outline-none bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg cursor-pointer hover:border-neutral-300 focus:border-neutral-300 flex justify-between items-center"
      >
        {state}
        <CaretUpDown />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={dropDownRef}
            initial={{ y: 2, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 2, opacity: 0 }}
            className=" p-1 absolute z-30 w-36 mt-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            {options.map((option: string) => {
              return (
                <li
                  onClick={() => selectHandle(option, id)}
                  key={option}
                  className={cn(
                    "py-1 px-2 cursor-pointer rounded-md flex justify-between items-center",
                    {
                      "text-neutral-900 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-700": state === option,
                      "text-neutral-400 dark:text-neutral-600 hover:bg-neutral-200 hover:dark:bg-neutral-800": state !== option,
                    }
                  )}
                >
                  {option}
                  {state === option && <Check size={12} />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropdownSelect;

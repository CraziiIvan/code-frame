import { CaretUpDown, Check } from "@phosphor-icons/react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useOutsideClick from "../hooks/useOutsideClick";

type TDropdownSelectProps = {
  options: string[];
  id: string;
  state: string;
  action: ActionCreatorWithPayload<string>;
};

function DropdownSelect({ options, state, action, id }: TDropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const selectorRef = useRef(null)
  const dropDownRef = useRef(null)

  function toggleDropdown() {
    setOpen(!open);
  }

  function selectHandle(value: string) {
    dispatch(action(value));
    setOpen(false);
  }

  useOutsideClick({ dispatch: setOpen, refs: [selectorRef, dropDownRef]})

  return (
    <div className=" relative">
      <label className=" text-neutral-400 text-xs">
        {" "}
        {id.charAt(0).toLocaleUpperCase() + id.slice(1)}
      </label>
      <motion.button
      ref={selectorRef}
        onClick={toggleDropdown}
        className="mt-1 py-1 px-2 w-36 outline-none bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer hover:border-neutral-300 focus:border-neutral-300 flex justify-between items-center"
      >
        {state}
        <CaretUpDown />
      </motion.button>
      <AnimatePresence>
      {open && (
        <motion.ul
        ref={dropDownRef}
          initial={{y: 2, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: 2, opacity: 0}}
          className=" p-1 absolute z-30 w-36 mt-1 bg-neutral-100 rounded-lg border border-neutral-200 overflow-hidden"
        >
          {options.map((option: string) => {
            return (
              <li
                onClick={() => selectHandle(option)}
                key={option}
                className={`py-1 px-2 cursor-pointer rounded-md flex justify-between items-center  ${
                  state === option
                    ? "text-neutral-900 bg-neutral-200"
                    : "text-neutral-400 hover:bg-neutral-200"
                }`}
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

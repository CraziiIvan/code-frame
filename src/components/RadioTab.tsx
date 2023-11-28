import { motion } from "framer-motion";
import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

type TRadioTAbProps = {
  options: string[];
  state: string;
  action: ActionCreatorWithPayload<string>;
  id: string;
};

function RadioTab({ options, state, action, id }: TRadioTAbProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <label className=" text-neutral-400 text-sm">
        {id.charAt(0).toLocaleUpperCase() + id.slice(1)}
      </label>
      <ul className="p-1 mt-1 w-full bg-neutral-100 border border-neutral-200 rounded-xl flex">
        {options.map((option) => {
          return (
            <li
              key={option}
              onClick={() => {
                dispatch(action(option));
              }}
              className={`${ options.length === 4 ? "w-1/4" : "w-1/2"} text-center py-1 cursor-pointer relative ${
                state === option ? "text-white" : "text-neutral-400"
              }`}
            >
              <span className=" z-10 relative">{option}</span>
              {state === option && (
                <motion.div
                  className=" absolute right-0 left-0 top-0 h-full bg-neutral-800 rounded-lg drop-shadow-sm"
                  layoutId={id}
                ></motion.div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RadioTab;

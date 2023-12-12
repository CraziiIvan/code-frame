import { useOptionsContext } from "../hooks/useOptionsContext";
import { TRadioTabProps } from "../types/types";
import {capitalizeAndAddSpace, cn} from "../utils/utils";
import { motion } from "framer-motion";
import { themeOptionStyles } from "../utils/lists";

function RadioTab({ id, options, state, theme }: TRadioTabProps) {
  const dispatch = useOptionsContext().dispatch;

  function selectHandle(type: string, payload: string) {
    dispatch({type, payload})
  }

  return (
    <div>
      <label className=" text-neutral-400 dark:text-neutral-500 text-xs">
        {capitalizeAndAddSpace(id)}
      </label>
      <ul className="p-0.5 mt-1 w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl flex">
        {options.map((option) => {
          if (theme) {
            return (
              <li key={option} onClick={() => selectHandle(id, option)} className="h-7 w-1/3 flex items-center justify-center cursor-pointer relative">
                <div className={cn("h-4 w-4 rounded-full z-10", themeOptionStyles[option as keyof typeof themeOptionStyles])} />
                {state === option && (
                <motion.div
                  className=" absolute right-0 left-0 top-0 h-full bg-neutral-800 rounded-lg drop-shadow-sm"
                  layoutId={id}
                ></motion.div>
              )}
              </li>
            );
          }
          return (
            <li
              key={option}
              onClick={() => selectHandle(id, option)} 
              className={cn(
                "text-center py-1 cursor-pointer relative ",
                {
                  "w-1/4": options.length === 4,
                  "w-1/2": options.length === 2,
                },
                {
                  "text-white": state === option,
                  "text-neutral-400 dark:text-neutral-600": state !== option,
                }
              )}
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

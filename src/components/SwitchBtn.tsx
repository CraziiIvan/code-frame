import { useOptionsContext } from "../hooks/useOptionsContext";
import { TSwitchBtnProps } from "../types/types";
import { motion } from "framer-motion";
import {capitalizeAndAddSpace, cn} from "../utils/utils";

function SwitchBtn({state, id }: TSwitchBtnProps) {

  const context = useOptionsContext()
  const { darkMode } = context.state
  const dispatch = context.dispatch

  return (
    <div>
      <label className=" text-neutral-400 dark:text-neutral-500 text-xs">
        {capitalizeAndAddSpace(id)}
      </label>
      <button
        onClick={() => {
          dispatch({type: id, payload: !state});
        }}
        className={cn("p-[3px] w-[48px] mt-2 rounded-full h-[30px] flex border border-neutral-200 dark:border-neutral-800", { "justify-start bg-neutral-100 dark:bg-neutral-900" : !darkMode, "justify-end bg-neutral-800 dark:bg-neutral-200" : darkMode } )}
      >
        <motion.div
          layout
          className={cn("h-full aspect-square rounded-full", { "bg-neutral-400 dark:bg-neutral-50": !darkMode, "bg-neutral-50 dark:bg-neutral-900": darkMode })}
        />
      </button>
    </div>
  );
}

export default SwitchBtn;

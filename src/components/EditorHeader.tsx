import { Minus, Square, X } from "@phosphor-icons/react";
import { useOptionsContext } from "../hooks/useOptionsContext";
import {cn} from "../utils/utils";

function EditorHeader({bar}: {bar: string}) {

    const context = useOptionsContext()
    const { darkMode, title } = context.state
    const dispatch = context.dispatch

    return (
        <>
        {bar === "Mac Os" && (
          <header className={cn("py-3 relative flex items-center justify-center")}>
            <div className="flex gap-x-2 absolute left-5">
              <div className=" w-2.5 h-2.5 rounded-full shadow-inner bg-red-500" />
              <div className=" w-2.5 h-2.5 rounded-full shadow-inner bg-yellow-500" />
              <div className=" w-2.5 h-2.5 rounded-full shadow-inner bg-green-500" />
            </div>
            <input
              type="text"
              className=" text-center bg-transparent border-none outline-none text-sm font-medium text-neutral-500"
              value={title}
              onChange={(e) => dispatch({type: "title", payload: e.target.value })}
            />
          </header>
        )}
        { bar === "Window" && (
          <header className={cn("py-3 flex justify-between pl-8 pr-5")}>
            <input
              type="text"
              className=" text-left bg-transparent border-none outline-none text-sm font-medium text-neutral-500"
              value={title}
              onChange={(e) => dispatch({type: "title", payload: e.target.value })}
            />
            <div className={cn("flex items-center gap-x-5", { "text-neutral-50": darkMode, "text-neutral-800": !darkMode } )}>
              <Minus />
              <Square size={15} />
              <X />
            </div>
          </header>
        )}
        </>
    )
}

export default EditorHeader
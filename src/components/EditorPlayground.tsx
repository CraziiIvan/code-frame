import "../index.css";
import { useRef, useState } from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import { motion, useMotionValue } from "framer-motion";
import bg from "../assets/pure-background.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../store/configureStore";
import { fontOptions } from "../list";


function EditorPlayground() {
  const [title, setTitle] = useState("Untitled");
  const [code, setCode] = useState('console.log("Welcome from Snaply")');

  const containerRef = useRef<HTMLDivElement>(null);
  const leftResizerRef = useRef<HTMLButtonElement>(null);
  const rightResizerRef = useRef<HTMLButtonElement>(null);

  let prevWidth = 540
  const width = useMotionValue(540);
  const padding = useSelector((state: RootState) => state.editor.padding);
  const radious = useSelector((state: RootState) => state.editor.radious);
  const font = useSelector((state: RootState) => state.editor.font);

  const fontFamily = (fontOptions as any)[font];

  return (
    <motion.div
      className={` bg-cover bg-center relative flex items-center`}
      initial={{ padding: padding + "px" }}
      animate={{ padding: padding + "px" }}
      style={{ width, backgroundImage: `url(${bg})` }}
      ref={containerRef}
    >
      <div style={{borderRadius: radious+ "px"}} className={` w-full bg-gradient-to-br from-neutral-800 to-neutral-900 bg-opacity-80 border-2 border-neutral-600 overflow-hidden shadow-lg`}>
        <header className="py-3 relative flex items-center justify-center">
          <div className="flex gap-x-2 absolute left-5">
            <div className=" w-2.5 h-2.5 rounded-full shadow-inner bg-red-500" />
            <div className=" w-2.5 h-2.5 rounded-full shadow-inner bg-yellow-500" />
            <div className=" w-2.5 h-2.5 rounded-full shadow-inner bg-green-500" />
          </div>
          <input
            type="text"
            className=" text-center bg-transparent border-none outline-none text-sm font-medium text-neutral-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </header>
        <div className="noScrollBar px-2 h-[280px] overflow-y-scroll text-white">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              hljs.highlight(code, { language: "javascript" }).value
            }
            padding={10}
            style={{
              fontFamily,
              fontSize: 16,
            }}
            textareaClassName="focus:outline-none"
          />
        </div>
      </div>
      <motion.button
        ref={leftResizerRef}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0
        }}
        dragElastic={0}
        onDrag={(_, info) => {
          if ( prevWidth - (info.offset.x * 2) > 440) {
            width.set(prevWidth - (info.offset.x * 2))
          }
        }}
        onDragEnd={() => {
          prevWidth = width.get()
        }}
        className=" h-10 w-1.5 rounded-full bg-neutral-300 cursor-ew-resize absolute -left-1"
      />
      <motion.button
        ref={rightResizerRef}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0
        }}
        dragElastic={0}
        onDrag={(_, info) => {
          if ( prevWidth + (info.offset.x * 2) > 440) {
            width.set(prevWidth + (info.offset.x * 2))
          }
        }}
        onDragEnd={() => {
          prevWidth = width.get()
        }}
        className=" h-10 w-1.5 rounded-full bg-neutral-300 cursor-ew-resize absolute -right-1"
      />
    </motion.div>
  );
}

export default EditorPlayground;

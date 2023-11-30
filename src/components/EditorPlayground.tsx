import "../index.css";
import { useRef, useState, version } from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import { motion, useMotionValue } from "framer-motion";
import bg from "../assets/pure-background.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../store/configureStore";

function EditorPlayground() {
  const [title, setTitle] = useState("Untitled");
  const [code, setCode] = useState('console.log("Welcome from Snaply")');

  const width = useMotionValue(500);
  const containerRef = useRef<HTMLDivElement>(null);

  const padding = useSelector((state: RootState) => state.editor.padding);

  return (
    <motion.div
      className={` bg-cover bg-center relative flex items-center`}
      initial={{ padding: padding + "px" }}
      animate={{ padding: padding + "px" }}
      style={{ width, backgroundImage: `url(${bg})` }}
      ref={containerRef}
    >
      <div className=" w-full bg-gradient-to-br from-neutral-800 to-neutral-900 bg-opacity-80 border-2 border-neutral-700 rounded-xl overflow-hidden shadow-lg">
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
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
            }}
            textareaClassName="focus:outline-none"
          />
        </div>
      </div>
      <motion.button
      dragConstraints={{
        left: 0,
        right: 0
      }}
      dragElastic={0}
        id="hello"
        drag="x"
        onDragStart={(_, info) => {
          if (info.offset.x > 0 && width.get() >= 500) width.set(width.getPrevious() - 8)
          if (info.offset.x < 0) width.set(width.getPrevious() + (-info.velocity.x * 0.01))
          // if (info.offset.x < 0) console.log(info.velocity.x)
          console.log(width.getPrevious())
        }}
        className=" h-10 w-1.5 rounded-full bg-neutral-300 cursor-ew-resize absolute -left-1"
      />
      <button className=" h-10 w-1.5 rounded-full bg-neutral-300 cursor-ew-resize absolute -right-1" />
    </motion.div>
  );
}

export default EditorPlayground;

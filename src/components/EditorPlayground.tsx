import "../index.css";
import { useEffect, useRef, useState } from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import { motion, useMotionValue } from "framer-motion";
import { fontOptions, editorStyles, bgStyles } from "../utils/lists";
import EditorHeader from "./EditorHeader";
import { useOptionsContext } from "../hooks/useOptionsContext";
import {cn} from "../utils/utils";

function EditorPlayground() {
  const [code, setCode] = useState('console.log("Welcome from Code Frame 👋")');

  const context = useOptionsContext();
  const { language, font, fontSize, padding, theme, bar, darkMode, radious } =
    context.state;
  const canvasRef = context.canvasRef 

  const leftResizerRef = useRef<HTMLButtonElement>(null);
  const rightResizerRef = useRef<HTMLButtonElement>(null);

  let prevWidth = 540;
  const width = useMotionValue(540);

  const fontFamily = fontOptions[font as keyof typeof fontOptions];

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github${darkMode ? "-dark": ""}.min.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [darkMode]);

  return (
    <div className="absolute top-editor left-1/2 -translate-x-1/2">
      <motion.div
      className={cn("bg-top flex items-center bg-gradient-to-br mb-20", bgStyles[theme] )}
      initial={{ padding: padding + "px" }}
      animate={{ padding: padding + "px" }}
      style={{ width}}
      ref={canvasRef}
    >
      <div
        style={{ borderRadius: radious + "px" }}
        className={cn("w-full bg-gradient-to-br border overflow-hidden shadow-sm", (editorStyles as any)[theme][darkMode ? "dark": "light"])}
      >
        <EditorHeader bar={bar} />
        <div
          className={cn(
            `noScrollBar px-2 min-h-[280px] overflow-hidden`,
            { "text-neutral-100": darkMode, "text-neutral-900": !darkMode },
          )}
        >
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              hljs.highlight(code, { language }).value
            }
            padding={10}
            style={{
              fontFamily,
              fontSize: parseInt(fontSize),
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
          right: 0,
        }}
        dragElastic={0}
        onDrag={(_, info) => {
          const nextWidth = prevWidth - info.offset.x * 2;
          if (nextWidth > 460 && nextWidth < 920) {
            width.set(nextWidth);
          }
        }}
        onDragEnd={() => {
          prevWidth = width.get();
        }}
        className=" h-10 w-1.5 rounded-full bg-neutral-300 cursor-ew-resize absolute -left-1"
      />
      <motion.button
        ref={rightResizerRef}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={0}
        onDrag={(_, info) => {
          const nextWidth = prevWidth + info.offset.x * 2;
          if (nextWidth > 460 && nextWidth < 920) {
            width.set(nextWidth);
          }
        }}
        onDragEnd={() => {
          prevWidth = width.get();
        }}
        className=" h-10 w-1.5 rounded-full bg-neutral-300 cursor-ew-resize absolute -right-1"
      />
    </motion.div>
    </div>
  );
}

export default EditorPlayground;

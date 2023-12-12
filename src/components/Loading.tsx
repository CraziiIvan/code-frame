import { motion } from "framer-motion";

function Loading() {
  return (
    <div className=" h-full w-full bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center">
      <motion.span animate={{rotate: 360}} transition={{repeat: Infinity, duration: .7, ease: "linear"}} className=" w-10 h-10 rounded-full border-t-[3px] border-r-[3px] border-t-neutral-500 border-r-transparent"></motion.span>
    </div>
  );
}

export default Loading;

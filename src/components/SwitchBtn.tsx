import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

type TSwitchBtnProps = {
  action: ActionCreatorWithoutPayload;
  state: boolean;
  id: string;
};

function SwitchBtn({ action, state, id }: TSwitchBtnProps) {
  const dispatch = useDispatch();

  const dotVariants = {
    switchOff: { translateX: 0, backgroundColor: "rgb(163 163 163)" },
    switchOn: { translateX: "20px", backgroundColor: "rgb(250 250 250)" },
  };

  const switchVarients = {
    switchOff: { backgroundColor: "rgb(245 245 245)" },
    switchOn: { backgroundColor: "rgb(38 38 38)" },
  };

  return (
    <div>
      <label className=" text-neutral-400 text-sm">
        {id.charAt(0).toLocaleUpperCase() + id.slice(1)}
      </label>
      <motion.button
        onClick={() => {
          dispatch(action());
        }}
        variants={switchVarients}
        animate={state ? "switchOn" : "switchOff"}
        className={` p-1 w-[50px] mt-2 rounded-full  flex border border-neutral-200`}
      >
        <motion.div
          variants={dotVariants}
          animate={state ? "switchOn" : "switchOff"}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
          className=" w-5 h-5 rounded-full"
        />
      </motion.button>
    </div>
  );
}

export default SwitchBtn;
